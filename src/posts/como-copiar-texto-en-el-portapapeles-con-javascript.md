---
title: ¿Cómo copiar texto en el portapapeles con JavaScript?
date: 22 Feb 2023
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

Anteriormente ya habia escrito un articulo llamado <a href="/blog/aprende-a-manejar-el-portapapeles-con-javascript">Aprende a manejar el portapapeles con JavaScript</a>, donde trataba de explicarte como utilizar la API de `Clipboard`. En este articulo hablaremos especificamente solo sobre copiar el texto en el portapapeles y haremos una funcion reutilizable para utilizarla en cualquier sitio web, de igual manera te explicaré lo básico que debes entender de esta API, pero no dudes en visitar el artículo completo para mejorar tu conocimiento.

## Clipboard API

Para acceder a ella solo debemos utilizar el objeto `clipboard` de [`window.navigator`](https://developer.mozilla.org/en-US/docs/Web/API/Window/navigator). Esta API nos proporciona cuatro metodos asíncronos, en este caso solo utilizaremos uno: `writeText()`, el cual copia en el portapapeles el texto que pasaremos por parametro, y nos devolvera un promesa vacía, pero que podemos utilizar para hacer comprobacion de errores.

Muy bien, ahora como te decia al inicio, crearemos una funcion reutilizable, la cual llamaremos `copyTextToClipboard`, que recibira los parametros `data` y `callback`

### Comprobacion de Tipos

Es importante verificar los tipos de datos siempre para que nos evitemos errores no deseados en nuestro codigo.

```js
function copyTextToClipboard(data, callback) {
  // Comprobamos que el tipo de dato del argumento
  // 'data' sea 'string' y de no ser asi lanzamos
  // un error de tipo.
  if (typeof data !== "string") {
    throw new TypeError(
      "The 'data' argument of 'copyTextToClipboard' is of a different type than 'string'"
    );
  }

  // Ahora comprobamos primero que el argumento
  // 'callback' existe y de ser asi seguimos
  // comprobando que sea del tipo 'function'.
  if (callback && typeof callback !== "function") {
    throw new TypeError(
      "The 'callback' argument of 'copyTextToClipboard' is of a different type than 'function'"
    );
  }
}
```

Bien, ahora que ya comprobamos que los tipos son correctos, seguiremos copiando el texto, te mostrare como hacerlo de dos maneras: con `then/catch` y con `async/await`.

### Con Then/Catch

```js
function copyTextToClipboard(data, callback) {
  /* Comprobacion de tipos... */

  // Desestructuramos el objeto 'clipboard'
  // de 'window.navigator'
  const { clipboard } = window.navigator;

  clipboard
    .writeText(data)
    .then(() => {
      // Comprobamos que existe 'callback'
      // Y de ser asi ejecutamos la funcion
      // y pasamos 'null' como primer
      // argumento ya que no hubo error.
      if (callback) callback(null, data);
    })
    .catch((error) => {
      // Al igual que en 'then' pero en
      // este caso pasamos el error que 
      // nos lanza la funcion 'writeText'
      if (callback) callback(error, data);
    });
}
```

### Con Async/Await

```js
// Recuerda agregar la palabra clave 'async'
async function copyTextToClipboard(data, callback) {
  /* Comprobacion de tipos... */

  // Utilizaremos el bloque try/catch para
  // poder controlar el error y que nuestra
  // app no se rompa.
  try {
    const { clipboard } = window.navigator

    // Esperamos que se cumpla o se rechace
    // la promesa.
    await clipboard.writeText(data)

    if (callback) callback(null, data)
  } catch(error) {
    if (callback) callback(error, data)
  }
}
```

### Compatibilidad con Navegadores
- **Can I Use**
    - [Asynchronous Clipboard API](https://caniuse.com/async-clipboard)
- **MDN**
    - [Clipboard API](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard#browser_compatibility)
