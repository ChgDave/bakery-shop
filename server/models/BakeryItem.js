const { Schema, model } = require("mongoose");

const bakeryItemSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  cost: {
    type: Number,
    required: true,
    trim: true,
  },
  calories: {
    type: Number,
    required: true,
    trim: true,
  },
  img: {
    type: String,
    trim: true,
    required: true,
  },
});

const BakeryItem = model("BakeryItem", bakeryItemSchema);

module.exports = BakeryItem;
