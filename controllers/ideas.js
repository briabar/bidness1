const Idea = require('../models/idea');
const S3 = require('aws-sdk/clients/s3');
const {v4: uuidv4} = require('uuid');

const s3 = new S3();

module.exports = {
    create,
    index,
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
        const idea = await Idea.create({caption: req.body.idea, user: req.user});
        await idea.save()// save it
        res.status(201).json({data: 'idea added'})
    } catch(err){

        res.status(400).json({err})
    }
}