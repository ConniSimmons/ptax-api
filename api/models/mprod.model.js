const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mprodSchema = new Schema({
    mprod: {
        type: String,
        unique: false,
        required: true,
        ref: "mprod",
    }, 
});

module.exports = mprodSchema;

