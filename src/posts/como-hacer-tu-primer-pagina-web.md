---
title: ¿Cómo hacer tu primer página web?
date: 16 Feb 2023
tags:
- javascript
- css
- html
resume: ¿Te preguntas cómo crear tu primera página web? No te preocupes, en este tutorial te guiaremos a través de los conceptos básicos y te enseñaremos todo lo que necesitas saber para empezar.
---

# ¿Cómo hacer tu primer página web?

Crear tu primera página web puede parecer intimidante al principio, especialmente si nunca has trabajado con código antes. Sin embargo, con una comprensión básica de HTML, CSS y JavaScript, podrás crear una página web simple en poco tiempo.

A continuación, te explicaré los conceptos básicos de cada uno de estos lenguajes y cómo se pueden utilizar para crear tu primera página web.

## HTML

HTML es el lenguaje utilizado para crear la estructura y el contenido de una página web. Cada página web está compuesta de elementos HTML que se utilizan para definir la estructura de la página, como títulos, párrafos, encabezados, imágenes y enlaces.

Para comenzar, debes abrir un editor de texto en tu computadora, como Bloc de notas (Windows) o TextEdit (Mac). Luego, escribe el siguiente código en tu editor:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Mi primera página web</title>
  </head>
  <body>
    <h1>Hola, mundo!</h1>
    <p>Esta es mi primera página web.</p>
  </body>
</html>
```
El código anterior es un ejemplo de HTML básico. El elemento ```<!DOCTYPE html>``` indica el tipo de documento que estás creando. El elemento ```<html>``` indica el comienzo de la página web. El elemento ```<head>``` contiene información sobre la página, como el título. El elemento ```<body>``` contiene el contenido de la página.

En este ejemplo, hemos agregado un título a la página con el elemento ```<title>``` y un encabezado y un párrafo con los elementos ``````<h1>`````` y ``````<p>``````.

Guarda el archivo con la extensión ".html" y ábrelo en tu navegador web. Verás tu primera página web en acción.

## CSS

CSS es el lenguaje utilizado para dar estilo y diseño a una página web. Con CSS, puedes controlar el aspecto de los elementos HTML, como los colores, fuentes, tamaños y posiciones.

Para agregar CSS a tu página web, primero debes crear un archivo separado con extensión ".css". En el mismo directorio donde guardaste tu archivo HTML, crea un nuevo archivo llamado "style.css" y escribe el siguiente código:

```css
h1 {
	color: blue;
	font-family: Arial, sans-serif;
}

p {
	color: red;
	font-size: 18px;
}
```

Este código aplica estilos a los elementos HTML ```<h1>``` y ```<p>```. El selector h1 indica que los estilos se aplicarán a todos los elementos ```<h1>``` de la página. Los estilos incluyen un color azul y una fuente Arial. El selector p indica que los estilos se aplicarán a todos los elementos ```<p>``` de la página. Los estilos incluyen un color rojo y un tamaño de fuente de 18 píxeles.

Para aplicar estos estilos a la página web, debes enlazar el archivo CSS en el archivo HTML. Agrega el siguiente código dentro del elemento ```<head>``` en el archivo HTML:

```html
<link rel="stylesheet" type="text/css" href="style.css">
```

Este código enlaza el archivo *"style.css"* con la página HTML. Guarda ambos archivos y actualiza la página web en tu navegador. Verás que los estilos CSS se han aplicado a la página.

## JavaScript

JavaScript es un lenguaje de programación que se utiliza para crear interactividad y dinamismo en una página web. Con JavaScript, puedes agregar efectos visuales, animaciones, validar formularios, mostrar u ocultar elementos y mucho más.

Para agregar JavaScript a tu página web, debes crear un archivo separado con extensión ".js". En el mismo directorio donde guardaste tu archivo HTML, crea un nuevo archivo llamado *"script.js"* y escribe el siguiente código:

```js
alert("¡Bienvenido a mi página web!");
```

Este código muestra una ventana emergente con el mensaje "¡Bienvenido a mi página web!" cuando se carga la página.

Para enlazar el archivo JavaScript en el archivo HTML, agrega el siguiente código antes del cierre del elemento ```<body>```:

```html
<script src="script.js"></script>
```

Este código enlaza el archivo *"script.js"* con la página HTML. Guarda ambos archivos y actualiza la página web en tu navegador. Verás que se muestra una ventana emergente con el mensaje de bienvenida.

Ahora que ya has creado tu primera página web con HTML, CSS y JavaScript, puedes continuar aprendiendo más sobre estos lenguajes y cómo utilizarlos para crear páginas web más avanzadas. Hay muchos recursos en línea, tutoriales y cursos que pueden ayudarte a aprender más.

En resumen, crear tu primera página web puede parecer desalentador al principio, pero con una comprensión básica de HTML, CSS y JavaScript, es posible crear una página web simple en poco tiempo. Espero que este artículo haya sido útil para ti y te haya dado una idea de cómo comenzar a crear tu primera página web. ¡Buena suerte!