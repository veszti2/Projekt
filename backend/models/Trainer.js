const mongoose = require("mongoose");

const trainerSchema = new mongoose.Schema({
  nev: { type: String, required: true },
  elerhetoseg: { type: String, required: true, unique: true },
  specialization: { type: String },
  experience: { type: String }, 
  ar: { type: String },
  kep: { type: String },
}, { timestamps: true });

const TrainerModel = mongoose.model('trainer', trainerSchema);

module.exports = TrainerModel;