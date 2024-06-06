/*
* Curso de Engenharia de Software - UniEVANGÉLICA 
* Disciplina de Programação Web 
* Dev: Guilherme Aragão Silva
* DATA: 06/06/2024
*/

let cars = [];

const getAllCars = (req, res) => {
    res.json(cars);
};

const createCar = (req, res) => {
    const newCar = {
        id: cars.length + 1,
        ...req.body
    };
    cars.push(newCar);
    res.status(201).json(newCar);
};

const getCarById = (req, res) => {
    const car = cars.find(c => c.id == req.params.car_id);
    if (car) {
        res.json(car);
    } else {
        res.status(404).json({ message: 'Carro não encontrado' });
    }
};

const updateCar = (req, res) => {
    const carIndex = cars.findIndex(c => c.id == req.params.car_id);
    if (carIndex >= 0) {
        cars[carIndex] = {
            id: cars[carIndex].id,
            ...req.body
        };
        res.json(cars[carIndex]);
    } else {
        res.status(404).json({ message: 'Carro não encontrado' });
    }
};

const deleteCar = (req, res) => {
    const carIndex = cars.findIndex(c => c.id == req.params.car_id);
    if (carIndex >= 0) {
        cars.splice(carIndex, 1);
        res.status(204).end();
    } else {
        res.status(404).json({ message: 'Carro não encontrado' });
    }
};

module.exports = {
    getAllCars,
    createCar,
    getCarById,
    updateCar,
    deleteCar
};
