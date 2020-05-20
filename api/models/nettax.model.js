const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const nettaxSchema = new Schema({
    nettax: {
        type: Number,
        unique: false,
        required: true,
        ref: "nettax",
    }, 
});

module.exports = nettaxSchema;

