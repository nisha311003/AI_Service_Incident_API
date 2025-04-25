const express = require('express');
const router = express.Router();
const Incident = require('../models/incident');

// GET / incidents
router.get('/', async (req , res)=>{
    const incidents = await Incident.find();
    res.status(200).json(incidents);
});

// POST / incidents
router.post('/', async (req , res)=>{
    const {title, description, severity} = req.body;
    if(!title || !description || !['Low', 'Medium', 'High'].includes(severity)){
        return res.status(400).json({messages: 'Invalid input'});
    }
    try{
        const incident = await Incident.create({title, description, severity});
        res.status(201).json(incident);
    }catch(error){
        res.status(500).json({message: 'Error creating incident', error: error.message});
    }
});

// GET / incidents/:id
router.get('/:id', async (req , res)=>{
    try{
        const incident = await Incident.findById(req.params.id);
        if(!incident){
            return res.status(404).json({message: 'Incident not found'});
        }
        res.status(200).json(incident);
    }catch(err){
        res.status(404).json({message: 'Invalid Id'});
    }
});

// Delete / incidents/:id
router.delete('/:id', async (req , res)=>{
    try{
        const result = await Incident.findByIdAndDelete(req.params.id);
        if(!result){
            return res.status(404).json({message: 'Incident not found'});
        }
        res.status(200).json({message: 'Incident deleted successfully'});
    }catch(error){
        res.status(404).json({message: 'Invalid Id'});
    }
});
module.exports = router;