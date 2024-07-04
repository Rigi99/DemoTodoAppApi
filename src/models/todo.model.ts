import mongoose from 'mongoose'

const TodoSchema = new mongoose.Schema({
        title: {
            type: String,
        },
        description: {
            type: String,
            default: false,
        },
        deadline: {
            type: String,
        },
        status: {
            type: String,
            default: 'open',
        },
        assignedTo: {
            type: String,
        },
    }, {
        timestamps: true
    }
)

const TodoModel = mongoose.model("Todo", TodoSchema);

export default TodoModel;
