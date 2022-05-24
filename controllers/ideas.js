const Idea = require('../models/idea');
const S3 = require('aws-sdk/clients/s3');
const {v4: uuidv4} = require('uuid');

const s3 = new S3();

module.exports = {
    index
}

async function index(req, res) {
    try {
        const ideas = await Idea.find({}).populate('user').exec()
        res.status(200).json({ideas})
    } catch(error) {
        
    }
}