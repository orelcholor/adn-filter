<center>
	<h1> Hola y bienvenido al repositorio de ADN-Filter </h1>
</center>

Este proyecto nace como una prueba de habilidades técnicas de la que fui partícipe. Al concluir dicha prueba y enviar el resultado obtenido en el tiempo limite, me propuse a mejorarlo e impleméntalo como parte de mi portafolio de proyectos.
Cabe destacar que **todavía pueden implementarse mejoras** (*por lo que recomiendo leer el archivo de "notas de la versión" para saber mas detalles*) pero cumple con la funcionalidad básica, por lo que decidí subirlo de igual manera

## ¿De que va este programa?
ADN-filter es un sistema web en donde se evalúan cadenas de ADN para encontrar mutaciones. Las cadenas de ADN están representadas con las letras A, T, C y G. 
El ADN tendrá una mutación si se encuentra **mas de una secuencia** de 4 letras iguales (*si se encuentra solo una no se considera mutación*) de forma horizontal, vertical u oblicua (*diagonal o diagonal invertida*).

El usuario ingresa la cadena a evaluar, luego esta es enviada a una API subida a Google Cloud. En Google Cloud se ejecuta un algoritmo que buscara todas las secuencias de 4 letras iguales.
Si se encuentran mas de 2 cadenas, el algoritmo devolverá **true** como respuesta, en caso contrario devolverá **false**

Las secuencias enviadas aparecerán en la parte de abajo en la pagina web, donde se mostrara la cadena en forma de matriz, su ID (generado en la API) y el valor "mutación" donde con un true o false se representa si la cadena esta mutada o no.


# Uso

El front-end esta hosteado en el siguiente enlace: 
 https://adn-filter.netlify.app/
en esta pagina podremos ingresar una cadena de ADN y enviarla a la API (hosteada en Google Cloud). ahí mismo se encuentran unas cadenas de ejemplo para poder validar la funcionalidad del algoritmo.


# Para finalizar
Al sistema todavía le falta trabajo por hacer para que este totalmente presentable, pero pienso que con esto se puede comprobar que poseo las bases para poder ejercer en el área de programación.

Lo invito a pasar por el código para echar un vistazo y, si gusta, hacer un feedback de este proyecto. 
Gracias por leer hasta aquí y le deseo excelente día, tarde o noche (8

Las secuencias enviadas aparecerán en la parte de abajo en la pagina web, donde se mostrara la cadena en forma de matriz, su ID (generado en la API) y el valor "mutación" donde con un true o false se representa si la cadena esta mutada o no.