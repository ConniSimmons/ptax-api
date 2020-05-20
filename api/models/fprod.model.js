const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const fprodSchema = new Schema({
    fprod: {
        type: String,
        unique: false,
        required: true,
        ref: "fprod"
    }, 
});

module.exports = fprodSchema;

