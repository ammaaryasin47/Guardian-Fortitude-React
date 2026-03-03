const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  contact: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  preferredLanguage: { type: String, required: true },
  chainOfCommand: { type: String, required: true },
  acknowledgeTerms: { type: Boolean, required: true },
  sector: { type: String, required: true },
  nature: { type: String, required: true },
  armsLicense: { type: String }, 
  role: { type: String, required: true, enum: ['customer', 'admin', 'employee'] },
  address: { type: String, required: true },
  profilepic: { type: String } 
}, { timestamps: true });

UserSchema.pre('save', async function() {
  // If password is not modified, just finish
  if (!this.isModified('password')) return;

  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    // Notice: No next() needed when using an async function that returns a promise
  } catch (err) {
    throw err; // Mongoose will catch this and return it as a validation error
  }
});

UserSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model('User', UserSchema);
module.exports = User;

module.exports = mongoose.model('User', UserSchema);