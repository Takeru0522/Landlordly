const mongoose = require('mongoose');

//const connectionString = 'mongodb://localhost/Landlordly';
const connectionString = process.env.DATABASE_URL;

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false
});


mongoose.connection.on('connected', () => {
  console.log('Mongoose connected to ', connectionString);
});

mongoose.connection.on('error', err => {
  console.log('Mongoose error ', err);
});

mongoose.connection.on('disconnected', () => {
  console.log('Mongoose disconnected from ', connectionString);
});
