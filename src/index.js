const express = require('express');
const morgan = require('morgan');
const { route } = require('./routes');

const app = express();

//configuraciones
//designamos y validamos el puerto que usara el servidor
    app.set('port',process.env.PORT || 3000);
//damos formato a los archivos json par auqe se vean mamalones
    app.set('json spaces', 2);
//

//midleware
app.use(morgan('dev'));//escucha las peticiones al serv y despliega info por consola
app.use(express.urlencoded({extended: false}));//habilitamos la recepcion de datos a traves de formularios
app.use(express.json());//habilitamos el manejo de datos JSON
app.use(express.json())//para soportar el json al parecer


//routes
app.use(require('./routes/index'));
app.use('/api/hasMutation', require('./routes/hasMutation'));//ruta de hasMutation.js (asignando la ruta /api/hasMutation)



//creando el servidor
app.listen(app.get('port'), () => {
    console.log(`Servidor corriendo en el puerto ${3000}`);
});