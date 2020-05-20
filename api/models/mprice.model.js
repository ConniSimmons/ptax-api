const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mpriceSchema = new Schema({
    mprice: {
        type: Number,
        unique: false,
        required: true,
        ref: "mprice"
    }, 
});

module.exports = mpriceSchema;

