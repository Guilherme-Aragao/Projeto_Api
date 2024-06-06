/*
* Curso de Engenharia de Software - UniEVANGÉLICA 
* Disciplina de Programação Web 
* Dev: Guilherme Aragão Silva
* DATA: 06/06/2024
*/

const express = require('express');
const router = express.Router();
const carController = require('../controllers/carController');

router.get('/', carController.getAllCars);
router.post('/', carController.createCar);
router.get('/:car_id', carController.getCarById);
router.put('/:car_id', carController.updateCar);
router.delete('/:car_id', carController.deleteCar);

module.exports = router;
