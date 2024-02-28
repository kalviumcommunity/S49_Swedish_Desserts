const Joi = require('joi');
const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  dessertName: {
    type: String,
    required: true
  },
  ratings: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  }
});

const Review = mongoose.model('Review', reviewSchema);

function validateReview(review) {
  const schema = Joi.object({
    dessertName: Joi.string().required(),
    ratings: Joi.number().required(),
    description: Joi.string().required()
  });
  return schema.validate(review);
}

module.exports = {
  Review,
  validateReview
};
