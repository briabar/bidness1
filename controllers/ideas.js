const Idea = require('../models/idea');
const S3 = require('aws-sdk/clients/s3');
const {v4: uuidv4} = require('uuid');

const s3 = new S3();

module.exports = {
    create,
    index,
    deleteIdea,
}

async function index(req, res) {
    try {
        const ideas = await Idea.find({}).populate('user').exec()
        res.status(200).json({ideas})
    } catch(error) {
    }
}

async function create(req, res) {
    try {
        const idea = await Idea.create({idea: req.body.idea, user: req.user});
        console.log(idea)
        await idea.save()// save it
        res.status(201).json({data: 'idea added'})
    } catch(err){ 
        res.status(400).json({err})
    }
}

async function deleteIdea(req, res){
    try {
        const idea = await Idea.findById(req.params.id);
        if (req.user._id === idea.user.valueOf()) {
            idea.remove(req.params.id) // mutating a document
            res.json({data: 'idea removed'})
        }
        // req.params.id is the like id 
        // await idea.save() // after you mutate a document you must save
        else {
            res.json({data: 'idea not removed'})
        }
    } catch(err){
        console.log("ERROR HERE")
        res.status(400).json({err})
    }
}