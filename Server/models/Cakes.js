const mongoose = require('mongoose');

const CakesSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    calories: Number,
    type: String,
    occasions: Array 
});

const CakesModel = mongoose.model("cake", CakesSchema);
module.exports = CakesModel;
