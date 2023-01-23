import mongoose from 'mongoose';

const RoleSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    hours: {
        type: Number,
        required: false,
        default: 0
    },
});

export default mongoose.model('Role', RoleSchema);