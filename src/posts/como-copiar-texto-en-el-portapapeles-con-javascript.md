---
title: ¿Cómo copiar texto en el portapapeles con JavaScript?
date: 24 Feb 2023
tags:
  - javascript
  - web
keywords:
  - clipboard
  - copiar
  - portapapeles
resume: Copiar texto en el portapapeles con JavaScript puede parecer complicado, pero en realidad es bastante sencillo. En este tutorial, te explicamos cómo puedes implementar esta funcionalidad en tu sitio web y ademas que sea una función reutilizable.
---

# ¿Cómo copiar texto en el portapapeles con JavaScript?

¿Has visto esas páginas como *Bootstrap, Tailwind CSS, Github*, donde dando clic puedes copiar el código sin necesidad de seleccionarlo todo, dar clic derecho y darle en copiar, o usar `Ctrl + C`?

Cada vez es más popular la funcionalidad de copiar el texto de un código, un enlace, etcétera, en las páginas web y redes sociales, en este artículo veremos cómo podemos copiar el texto de tu página web con una función reutilizable para usarla en cualquier otro código.

## Clipboard API

La API de `Clipboard` nos proporciona métodos que nos permiten copiar y pegar tanto texto como otros tipos de datos como imágenes y audios. esta API es *asíncrona*, por lo que sus métodos nos devuelven una promesa la cual se resolverá o se rechazara dependiendo de si se pudo o no realizar la acción que ejecutemos.

Podemos acceder a esta API por medio de `window.navigator.clipboard`.

En este articulo nos centraremos solo en uno de los métodos, el que nos sirve para copiar solo texto, pero de igual manera te daré una breve explicación de cada método.

- `write`: recibe como parámetro un arreglo de [`ClipboardItem`](https://developer.mozilla.org/en-US/docs/Web/API/ClipboardItem)'s que se escribirán (copiar) en el portapapeles.

- `writeText`: recibe como parámetro una cadena de texto, que se escribirá (copiar) en el portapapeles. Este es el que utilizaremos para este tutorial.

- `read`: devuelve una promesa que se resuelve con un arreglo de [`ClipboardItem`](https://developer.mozilla.org/en-US/docs/Web/API/ClipboardItem)'s.

- `readText`: devuelve una promesa que se resuelve con una cadena de texto; esta cadena puede estar vacía si el último elemento que se copió no es un texto, o el portapapeles este vacío.

Los errores son algo que siempre pasa en todo código que escribamos, esta API puede arrojarnos algunos que te comentare en seguida:

- `NotAllowedError`: se lanza cuando la página no tiene permiso para acceder al portapapeles.

- `NotFoundError`: se lanza cuando el portapapeles no está disponible.

- `ClipboardEventCancelled`: se lanza cuando el usuario cancela la operación del portapapeles.

## La función `copyTextToClipboard`

Ahora ya podemos empezar a crear nuestra función reutilizable, y te cuento de que va:

> Sera una función a la que le pasaremos como primer parámetro el texto que deseamos copiar y como segundo parámetro que será opcional, una función callback que podrá ejecutar después de que se resuelva o se rechace, esta función recibirá dos parámetros, el primero será el error que devuelva la promesa en caso de que se rechace y si todo ha ido bien será null, y el segundo parámetro será el texto que estamos tratando de copiar.

También realizaremos

- Comprobacion de tipos, para un mejor manejo de los errores
- Una versión síncrona utilizando `then/catch`
- Una versión asíncrona utilizando `async/await`

### 1. Comprobación de Tipos

```js
function copyTextToClipboard(data, callback) {
  if (data === undefined) {
    throw new ReferenceError("The 'data' argument is not present or is undefined")
  }

  if (typeof data !== 'string') {
    throw new TypeError("The 'data' argument must be of type 'string'")
  }

  if (callback && typeof callback !== 'function') {
    throw new TypeError("The 'callback' argument must be of type 'function'")
  }
}
```

Esta función solo es para copiar texto por lo que comprobaremos que `data` exista, y de no ser asi lanzaremos un error con `throw` y `ReferenceError`.

Ahora que ya sabemos que `data` si existe comprobamos que sea un tipo de dato *string*, de lo contrario lanzaremos otro error pero en este caso seria con `TypeError`.

Como mencionaba antes la función `callback` será opcional por lo que primero comprobamos que exista y de ser así comprobamos que sea del tipo *function*, de lo contrario hacemos lo mismo que con `data`, con su respectivo mensaje.

### 2. Then/Catch

```js
function copyTextToClipboard(data, callback) {
  /* Comprobacion de Tipos */

  const { clipboard } = window.navigator

  clipboard
    .writeText(data)
    .then(() => {
      if (callback) callback(null, data)
    })
    .catch((error) => {
      if (callback) callback(error, data)
    })
}
```

Aquí solo nos queda ejecutar el método `writeText` y esperar a que se resuelva o se rechace, en ambos casos comprobaremos que `callback` exista y de ser así la ejecutamos.

En caso de que se resuelva le pasamos `null` en el primer parámetro, y en caso contrario le pasamos el error que nos devuelve `catch`.

### 3. Async/Await

```js
async function copyTextToClipboard(data, callback) {
  /* Comprobacion de Tipos */

  const { clipboard } = window.navigator

  try {
    await clipboard.writeText(data)
    if (callback) callback(null, data)
  } catch(error) {
    if (callback) callback(error, data)
  }
}
```

Aquí convertimos en asíncrona la función anteponiendo la palabra `async` antes de `function copyTextToClipboard`.

Ahora utilizaremos el bloque `try/catch` para poder manejar el error en caso de que haya alguno.

Con `await` esperamos a que el texto se copie y poder seguir con el resto de la función.

Al igual que con la versión síncrona, comprobamos que exista `callback` y ejecutamos la función con sus respectivos parámetros.

## Ejemplo: veamos un uso de la vida real

Imaginemos uno de los casos que mencionaba anteriormente, donde hay un código como el cdn de una librería el cual podemos copiar dando clic en un botón para pegarlo en nuestra página o proyecto, haremos uno parecido donde al presionar el botón y copiar el texto el texto del botón cambie a “Copiado” y luego de un segundo vuelva a ser el texto “Copiar”, y en caso de que ocurra un error el botón no cambiara y en su lugar lanzara una alerta indicando el error.

```html
<div class="container">
  <pre class="copy-text">&lt;script src="https://cdn.tailwindcss.com"&gt;&lt;/script&gt;</pre>
  <button class="copy-button">Copiar</button>
</div>
```

```css
.container {
  position: relative;
}

.copy-text {
  margin: 0;
  padding: 1rem;
  background-color: gainsboro;
  border: 1px solid gray;
  overflow-x: auto;
}

.copy-button {
  position: absolute;
  top: 4px;
  right: 4px;
  padding: 4px 8px;
}
```

```js
async function copyTextToClipboard(data, callback) {
  /* Code... */
}

const $copyText = document.querySelector('.copy-text')
const $copyButton = document.querySelector('.copy-button')

const handleClick = () => {
  const data = $copyText.textContent
  const callback = (error) => {
    if (error) {
      alert(error.toString())
      return
    }

    $copyButton.textContent = 'Copiado'
    setTimeout(() => {
      $copyButton.textContent = 'Copiar'
    }, 1000)
  }

  copyTextToClipboard(data, callback)
}

$copyButton.addEventListener('click', handleClick)
```
**¡Felicitaciones! 🥳**, ya puedes copiar el texto de cualquier página web programándolo, se siente bien ¿No?, en un futuro escribiré un artículo explicando más a fondo la API de Clipboard para que puedas ampliar tus conocimientos, talvez cuando vuelvas ya lo haya hecho y salga el enlace aquí.

### Compatibilidad con Navegadores

- **Can I Use**
    - [Asynchronous Clipboard API](https://caniuse.com/async-clipboard)
- **MDN**
    - [Clipboard API](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard#browser_compatibility)
