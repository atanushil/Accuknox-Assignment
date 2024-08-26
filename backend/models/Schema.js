const mongoose = require('mongoose');
const { Schema } = mongoose;

// Schema for the data within a widget
const dataSchema = new mongoose.Schema({
  color: { type: String, required: true },
  text: { type: String, required: true },
  value: { type: Number, required: true },
});

// Schema for a single widget
const widgetSchema = new mongoose.Schema({
  heading: { type: String, required: true },
  status: { type: Boolean, default: false }, 
  chart: { type: String, required:true }, 
  data: [dataSchema], 
});

// Schema for a category
const categorySchema = new mongoose.Schema({
  categoryName: { type: String, required: true },
  widget: [widgetSchema], // Array of widgets
});

// Create a model for the category schema
const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
