const mongoose = require('mongoose');

const CakesSchema = new mongoose.Schema({
    name: String,
    description: String,
    image_url: String,
    calories: Number,
    type: String,
    occasions: Array 
});

const CakesModel = mongoose.model("cake", CakesSchema);
module.exports = CakesModel;
