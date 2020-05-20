const mongoose = require('mongoose');

// CRUD = CREATE, READ, UPDATE, DELETE ** DO NOT USE ARROW FUNCTION HERE
module.exports = function (modelName, modelSchema) {
    modelSchema.statics = {
        create: function (data, callback) {
            const model = new this(data);
            model.save(callback);
        },
        get: function (query, callback) {
            this.find(query, callback);
        },
        update: function (query, data, callback) {
            this.findOneAndUpdate(query, {
                $set: data
            }, callback);
        },
        delete: function (query, callback) {
            this.findOneAndDelete(query, callback);
        },
    }
    return mongoose.model(modelName, modelSchema);
}
