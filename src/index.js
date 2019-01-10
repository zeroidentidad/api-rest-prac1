const express = require('express');
const app = express();
const morgan = require('morgan');

//configuraciones server
app.set('port',process.env.PORT||3000);
app.set('json spaces',2);


//middlewares 'combined', 'dev'
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//rutas
app.use(require('./rutas/index'));
app.use('/api/peliculas',require('./rutas/peliculas'));
app.use('/api/users',require('./rutas/users'));

// iniciar server
app.listen(app.get('port'),()=>{
	console.log(`Server on port ${app.get('port')}`);
});