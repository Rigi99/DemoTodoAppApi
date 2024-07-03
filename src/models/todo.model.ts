import mongoose from 'mongoose'

const TodoSchema = new mongoose.Schema({
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            default: false,
        },
        deadline: {
            type: Date,
            required: true,
        },
        status: {
            type: String,
            default: 'open',
        },
    }, {
        timestamps: true
    }
)

const TodoModel = mongoose.model("Todo", TodoSchema);

export default TodoModel;
