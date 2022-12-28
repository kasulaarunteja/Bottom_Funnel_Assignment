const mongoose = require('mongoose');


const TaskSchema = new mongoose.Schema(
    {
        title:{type: String, required:true},
        description:{type:String, required:true},
    },
    {
        versionKey:false,
        timeseries:true,
    },

)

module.exports = mongoose.model("task", TaskSchema);
