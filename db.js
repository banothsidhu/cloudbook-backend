const mongoose = require('mongoose');
require('dotenv').config();
const mongooseURI = process.env.MONGODB_URI ;

const connectToMongoDB = () => {
  mongoose.connect(mongooseURI)
    .then(() => console.log('Connected to MongoDB'))
    .catch(error => {
      console.error('Error connecting to MongoDB:', error.message);
      process.exit(1); // Exit the process if there is an error connecting to MongoDB
    });
};

module.exports = connectToMongoDB;
