import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import crypto from 'crypto';

const EmployeeSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    permissions: {
        type: String,
        enum: ['manager', 'employee'],
        required: false
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date,
    active: {type: Boolean, default: true}
});

// While saving an instance of a model, encrypt password if different than what's saved
EmployeeSchema.pre('save', async function(next){
  if(!this.isModified("password")) {
    return next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
})

// Called by AuthController during Sign In
EmployeeSchema.methods.matchPasswords = async function(password) {
  return await bcrypt.compare(password, this.password);
}

// Called by AuthController during Sign In
EmployeeSchema.methods.generateAuthToken = function() {
  return jwt.sign({_id: this._id}, process.env.JWTPRIVATEKEY, {expiresIn: '7d'});
}

// Called by AuthController during Forgot Password
EmployeeSchema.methods.generateResetPasswordToken = function() {
  const resetToken = crypto.randomBytes(20).toString('hex');

  this.resetPasswordToken = crypto.createHash('sha256').update(resetToken).digest('hex');
  this.resetPasswordExpire = Date.now() + 10 * (60 * 1000); // First number is minutes

  return resetToken;
}

export default mongoose.model('Employee', EmployeeSchema);