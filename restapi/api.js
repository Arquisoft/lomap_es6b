/*
import express, { Request, Response, Router } from 'express';
import {check} from 'express-validator';
*/
const {check} = require('express-validator');

const { json } = require('express');
const express = require('express');
const api = express.Router()
const Model = require('./models/model');

module.exports = api;

/*
interface User {
    name: string;
    email: string;
}
*/

/*
//This is not a restapi as it mantains state but it is here for
//simplicity. A database should be used instead.
let users = [];

api.get(
    "/users/list",
    async (req, res) => {
        return res.status(200).send(users);
    }
);
*/

//Get all Method
api.get('/placeMarks/getAll', async (req, res) => {
    try{
        const data = await Model.find();
        res.json(data)
    }
    catch(error){
        res.status(200).json({message: error.message})
    }
})



api.post("/placeMarks/add",
  async (req, res) => {
    const data = new Model({
        name: req.body.name,
        description: req.body.description,
        latitude: req.body.latitude,
        longitude: req.body.longitude,
        category: req.body.category
    })
    
    try {
    const dataToSave = await data.save();
    res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }

}
);

api.delete("/placeMarks/delete/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Model.findByIdAndDelete(id);
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})


//Get by ID Method
api.get('/getOne/:id', async (req, res) => {
    try{
        const data = await Model.findById(req.params.id);
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//Update by ID Method
api.patch('/update/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await Model.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
}) 

//Delete by ID Method
api.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Model.findByIdAndDelete(id)
        res.send(`Document with ${data.name} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//export default api;