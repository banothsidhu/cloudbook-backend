const express = require('express');
const connectToMongoDB = require('./db');
require('dotenv').config();

const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

async function startServer() {
  try {
    await connectToMongoDB();
    app.use(express.json());
    app.get('/', (req, res) => {
      res.send('This is backend');
    });
    const corsOptions = {
  origin: ["https://mycloudbook.vercel.app", "https://mycloudbook.netlify.app"]
};
    app.use(cors(corsOptions));
    app.use('/api/auth', require('./routes/auth'));
    app.use('/api/notes', require('./routes/notes'));
    app.listen(port, () => {
      console.log(`MyCloudBook Backend running at http://localhost:${port}`);
    });
  } catch (error) {
    console.log('Error connecting to MongoDB:', error.message);
    process.exit(1); // Exit the process if there is an error connecting to MongoDB
  }
}

startServer();
