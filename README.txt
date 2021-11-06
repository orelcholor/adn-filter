/****** PROYECTO: LECTURA DE SECUENCIAS DE ADN ******/


Este proyecto es el trabajo encargado como prueba de aptitudes para trabajar en ERUS Ecotecnologías

La aplicacion creada lee un arreglo con cadenas de texto que representan las bases nitrogenadas del ADN (A,T,C,G),
posteriormente busca coincidencias (mutaciones) de 4 letras iguales consecutivas en las direccion vertical, horizontal y
oblicua. 
Si se llegaran a encontrar 2 o mas mutaciones, se devuelve una status 200 del servidor, de no ser asi, el estatus
devuelto seria 500


/********** CORRER PROYECTO DE MANERA LOCAL ******************/
1.- Al descargar este proyecto, se puede ejecutatar de manera local atravez de visual Stutio Code. Debemos tener
    instalado Node JS.

    Al abrir Studio Code instalaremos todas las dependencias neecesarias con el comando "npm i".
    ya instaladas podemos correr el algoritmo de forma directa escrubiendo en consola "node  src/js/algoritmo.js".
    podemos editar el valor que recibe "hasMutation" en el mismo archivo


2.- podemos tambien ejecutar la funcion en la interfaz integrada en este proyecto. Para ello escrubiremos en 
    consola "npm run front", a continuacion se abrira una nueva ventana en el navegador en donde estara la interfaz.

    Habra que ingresar una cadena de ADN de 6 items con 6 digitos en cada uno separada solamente por comas 
    en el textarea que se encuentra ahi para enviar los datos. Se ejecutara en el servidor el algoritmo para verificar
    las mutaciones y se nos desplegara un alert con informacion del resultado.