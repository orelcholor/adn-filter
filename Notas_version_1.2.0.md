<center>
	<h1> Notas de la versión 1.2.0 </h1>
</center>
 Hola y bienvenido (8
 
 Los cambios realizados desde la primera versión de ADN-filter son bastantes, hay muchas ideas por implementar y las desarrollo cuando tengo tiempo libre. Pero de momento he aquí un listado de los cambios del sistema:
 <br>
###  *Implementación de front-end con Angular 12*
Se creo la carpeta "client" en la raíz, donde se desarrollo el nuevo front-end del proyecto. 
esto incluye:
- Mejoras de estilos con CSS
- Ahora es posible visualizar las cadenas almacenadas en la API del
	proyecto en forma de matriz y no por consola como antes
- es posible pre-vizualizar la cadena de ADN (en forma de matriz) que se va a enviar a evaluación

###  *La API del proyecto ahora esta hosteada en Google Cloud*
Después de investigar y unos cuantos errores en el deployment de nuestra API, se logro subir con éxito este proyecto, elaborado con nodeJS (express).

###  *Se agregaron mejoras en la búsqueda de cadenas en el algoritmo*
Se arreglaron unos errores de búsqueda de cadenas y se realizo una validación en donde ya no detecta las cadenas de 5 caracteres iguales como si fuera una mutación (recodemos que las mutaciones deben de ser **4 caracteres iguales solamente**). Realmente no se si químicamente esto es posible en una cadena de ADN, pero el ejercicio pide que deben de ser exclusivamente 4 caracteres iguales

# ¿Ahora que sigue?
Me gustaría utilizar esta sección para declarar las próximas mejoras en las que estarán trabajando:

- **Validaciones en el ingreso de la cadena de ADN a evaluar** (porque si es cierto que los necesita), tanto en el textarea como en la pre-visualización de la matriz

- **Crear el responsive design de la pagina web.** tengo planeado el uso de media-query en CSS para hacer la pagina accesible desde celulares. Me apoyare con el uso del prepocesador SASS puesto que ya tengo algo de experiencia usándolo.

- **Guardado de las cadenas de ADN en una BD**. Estoy viendo el uso de mongoDB como base de datos para este proyecto, aunque esto estará en un futuro mas lejano que las ideas anteriormente mencionadas.

De momento estas son las mejoras que tengo planeadas, quizá se me esta escapando alguna, pero con las venideras actualizaciones las abordare. 

Gracias por leer hasta aquí y recuerda que eres libre de dejar tu feedback (8. que tenga excelente día, tarde o noche.