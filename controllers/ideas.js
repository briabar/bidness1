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
        s3.upload(params, async function(error, data){
            const idea = await Idea.create({idea: data.Idea, user: req.user});
            console.log(idea)
			await idea.populate('user');
		
            res.status(201).json({idea: idea})
        })
    }
}

function create(req, res) {
    try {
		// Find a post, so we need the id of the post
        const idea = await Idea.findById(req.params.id);
		
        idea.ideas.push({username: req.user.username, userId: req.user._id}); //mutating a document
        await post.save()// save it
        res.status(201).json({data: 'like added'})
    } catch(err){
       
        res.status(400).json({err})
    }
}