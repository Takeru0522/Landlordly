const mongoose = require('mongoose');

const propertySchema = mongoose.Schema({
  address: {type: String, required: true},
  landlord: {type: mongoose.Schema.ObjectId, ref: 'User'},
  tenants: [{type: mongoose.Schema.ObjectId, ref: 'User'}],
  city: String,
  state: String,
  userId: String,
  zip: Number
  // beds: Number,
  // bathrooms: Number,
  // sqft: Number,
  // maintenence: Boolean, 
  // rent: Number,
  // image: [String]
});

const Property = mongoose.model('Property', propertySchema);
module.exports = Property;
