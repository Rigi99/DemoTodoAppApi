import mongoose from 'mongoose'

const TodoSchema = new mongoose.Schema({
        text: {
            type: String,
            required: true,
        },
        done: {
            type: Boolean,
            default: false,
        },
        status: {
            type: String,
            default: 'open',
        }
    }, {
        timestamps: true
    }
)

const TodoModel = mongoose.model("Todo", TodoSchema);

export default TodoModel;
