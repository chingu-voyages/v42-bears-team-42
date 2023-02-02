import mongoose from 'mongoose';

const TimeOffRequestSchema = new mongoose.Schema({
    employeeId: {   
        type: String, //TODO: decide on objectId or employee.id property
        required: true
    },
    dates: {
        type: [Date], //yyyy-mm-dd
        required: true
    },
    status: {
      type: String,
      enum: ['pending', 'approved', 'denied'],
      required: false,
      default: 'pending'
    },
    submitDate: {
        type: Date,
        required: true,
        default: Date.now
    }
});

export default mongoose.model('TimeOffRequest', TimeOffRequestSchema);