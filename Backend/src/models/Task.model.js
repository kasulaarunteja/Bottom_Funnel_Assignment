const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    description: { type: String, required: true },
  },
  {
    versionKey: false,
    timeseries: true,
  },
)

// const task = mongoose.model('task', TaskSchema)

module.exports = mongoose.model('task', TaskSchema)
