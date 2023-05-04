const mongoose = require('mongoose');
require('dotenv').config();
const mongooseURI = process.env.MONGODB_URI ;
console.log(mongooseURI)
const connectToMongoDB = () => {
  mongoose.connect(mongooseURI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(error => console.log('Error connecting to MongoDB:', error.message));
}

module.exports = connectToMongoDB;
