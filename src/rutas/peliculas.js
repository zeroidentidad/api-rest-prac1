const { Router } = require('express');
const router = Router();
const _ = require('underscore');

const peliculas = require('../ejemplo.json');
//console.log(peliculas);

router.get('/',(req, res)=>{
	res.json(peliculas);
});

router.post('/',(req, res)=>{
	const { titulo, director, anio, rating } = req.body;
	if(titulo && director && anio && rating){
		const id = peliculas.length+1;
		const nuevaPelicula = {...req.body, id};
		peliculas.push(nuevaPelicula);
		res.json(peliculas);
	}else{
		res.status(500).json({error:'Ocurrio un error'});
	}
});

router.put(`/:id`,(req, res)=>{
	const { id } = req.params;
	const { titulo, director, anio, rating } = req.body;
	if(titulo && director && anio && rating){
		_.each(peliculas,(pelicula, i)=>{
			if(pelicula.id == id){
				pelicula.titulo = titulo;
				pelicula.director = director;
				pelicula.anio = anio;
				pelicula.rating = rating;
			}
		});
		res.json(peliculas);
	}else{
		res.status(500).json({error:'Ocurrio un error'});
	}
});


router.delete(`/:id`,(req, res)=>{
	const { id } = req.params;
	_.each(peliculas,(pelicula, i)=>{
		if(pelicula.id == id){
			peliculas.splice(i, 1);
		}
	});
	res.json(peliculas);
});

module.exports = router;