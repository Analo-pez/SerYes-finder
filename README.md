# DEFINICIÓN DEL PROYECTO

El ejercicio consiste en desarrollar una aplicación web de búsqueda de series de TV, que nos permite des/marcar las series como favoritas y guardarlas en local storage.

En este proyecto se priorizará el uso del lenguaje de programación JavaScript, con el que se implementará la interactividad de la página. El ejercicio también tiene una parte de maquetación con HTML y Sass, que hará que el proyecto tenga una identidad propia y diferenciadora respecto a otros buscadores de series.

# BUSCADOR PERSONALIZADO "SER¡YES!"

Se le ha asignado un nombre al buscador para generar un plus de diferenciación respecto a otros buscadores. Así mismo, cuenta con un diseño responsive, basado en mobile first, que facilita su visualización en diferentes pantallas, pudiendo acceder desde diferentes dispositivos.

Para este proyecto se han planteado las siguientes interacciones: 

 - Si es la primera vez que se visita la página, al arrancar aparecerá un bucador formado por un input de texto y un botón de búsqueda, así como un aside vacío con el título de "Favorites". En el input se introducirá un texto para iniciar la búsqueda cuando clickamos el botón, sin embargo, en caso de no haber rellenado dicho input, la página mostrará un alert en el que se especifica que introduzca un nombre. De esta manera, no se podrá iniciar la búsqueda de contenido sin seleccionar "lo que buscar".
    Una vez que la usuaria haya realizado este paso correctamente, al clickar en el botón "search", se generará un catálogo con el resultado de las series asociadas a dicha búsqueda.
  - Si la usuaria ha encontrado lo que buscaba, podrá guardar su serie en "Favorites". Para ello, tendrá que clicar sobre el article que contiene la imagen y título de la serie. Cuando se produzca el evento, el color de fondo del elemento cambiará a violeta, indicando que se ha añadido a la lista de favoritas. 
     De forma paralela, al producirse el click en la serie favorita, se producirán otras dos interacciones:
     
    - se pintará la serie seleccionada en la columna de favoritos, recogiendo el nombre, imagen y titulo de esta.  
    - si la usuaria pincha por segunda vez en la misma serie, se producirá un alerte informando que esa serie ya está en su lista de favoritas.
    - se generará un botón de reset en la columna donde se guarda la serie seleccionada, el cual al ser clickado, vaciará la lista y el localstorage que recoge los contenidos añadidos en esta. Así mismo, el propio botón desaparecerá, ya que no habría nuevo contenido que elimiar de la lista hasta que se añadiese otra y comenzase el ciclo de nuevo.

  - En caso de no ser la primera vez que la usuaria accede a la página, aparecerán como favoritas, aquellas series que ya hubiese seleccionado con anterioridad.
