const mongoose = require('mongoose');

const ideaSchema = mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    idea: String,
})

module.exports = mongoose.model('Idea', ideaSchema);