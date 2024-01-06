const moongoose = require("mongoose")

const taskSchema = new moongoose.Schema({
    task: {
        type:  String,
        required: true,
}
});

module.exports = moongoose.model("Task", taskSchema);