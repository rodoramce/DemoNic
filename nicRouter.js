const express = require('express');
const router = express.Router();
const {visitorList} = require('./nicModel');


router.get('/visit', (req,res,next) => {
	visitorList.get()
		.then(response => {
			res.status(200).json({
				message : 'Successfully sent all the visitors',
				status : 200,
				visit : response
			});
		})
		.catch(err =>{
			res.status(500).json({
				message: 'Internal server error',
				status : 500
			});
			return next();
		});
});

router.post('/visit', (req,res,next) => {
	let requiredFields = ['nombreCompleto'];

	for(let i = 0; i < requiredFields.length; i++){
		let currentField = requiredFields[i];
		if (! (currentField in req.body)){
			res.status(406).json({
				message : `Missing field ${currentField} in body.`,
				status : 406
			});
			return next();
		}
	}

	let newVisit = req.body;


	visitorList.add(newVisit)
		.then(response => {
			res.status(201).json({
				message : "Successfully added the visitor",
				status: 201,
				visit : response
			});
		})
		.catch(err => {
			res.status(400).json({
				message : `${err}`,
				status : 400
			});
			return next();
		}); 
});

router.delete('/visit', (req,res,next) => {
	let requiredFields = ['_id'];

	for(let i = 0; i < requiredFields.length; i++) {
		let currentField = requiredFields[i];

		if (!(currentField in req.body)){
			res.status(406).json({
				message: `Missing field ${currentField} in body`,
				status : 406
			});
			return next();
		}
	}

	let delID = req.body._id;


	visitorList.delete(delID)
		.then(response => {
			res.status(204).json({
				message : "Visit succesfully deleted",
				status : 204,
				visit : response
			});
		})
		.catch(err => {
			res.status(404).json({
				message : "Visit not found",
				status : 404
			})
		})
});

router.get('/visit/search/:value', (req,res,next) =>{

	let value = req.params.value;

	visitorList.getGeneral(value)
		.then(response => {
			res.status(200).json({
				message : 'Successfully sent all the visitors',
				status : 200,
				visit : response
			});
		})
		.catch(err =>{
			res.status(500).json({
				message: "Internal server error",
				status : 500 
			});
			return next();
		});	
});


module.exports = router;