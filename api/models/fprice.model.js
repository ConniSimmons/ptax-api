const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const fpriceSchema = new Schema({
    fprice: {
        type: Number,
        unique: false,
        required: true,
        ref: "fprice"
    }, 
});

module.exports = fpriceSchema;
