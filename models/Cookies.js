const mongoose = require('mongoose');

const CookiesSchema = new mongoose.Schema({
    name: String,
    description: String,
    ingredients: [String],
    origin: String,
    image_url: String
});

const CookiesModel = mongoose.model("cookie", CookiesSchema);
module.exports = CookiesModel;
