const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  email: {type: String, unique: true},
  firstName: String,
  lastName: String,
  password: String,
  account: String,
  maintenanceForm: String,
  
});

// Send/Reponse Maintenence
// Collect and Send Rent


const User = mongoose.model('User', userSchema);
module.exports = User;
