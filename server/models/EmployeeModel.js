import mongoose from 'mongoose';
const bcrypt = require('bcryptjs');

const EmployeeSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    id: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    roles: {
        type: [ String ], //TODO: change to ObjectId or reference
        required: false
    }
    
});

// While saving an instance of a model, encrypt password if different than what's saved
EmployeeSchema.pre('save', async function(next){
  if(!this.isModified("password")) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
})

// Called by AuthController during Sign In
EmployeeSchema.methods.matchPasswords = async function(password) {
  return await bcrypt.compare(password, this.password);
}

export default mongoose.model('Employee', EmployeeSchema);
