const mongoose = require("mongoose");

const teacherSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  alamat: {
    type: String,
    required: true,
  },
  nisn: {
    type: String,
    required: true,
  },
});

const teacherModel = mongoose.model("Teacher", teacherSchema);

module.exports = teacherModel;
