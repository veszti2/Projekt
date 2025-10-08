const mongoose = require("mongoose");

const trainerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  specialization: { type: String },
  experience: { type: Number }, 
  gym: { type: String }, 
  phone: { type: String },
}, { timestamps: true });

module.exports = mongoose.model("Trainer", trainerSchema);
