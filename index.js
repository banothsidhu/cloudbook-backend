const express = require('express')
const connectToMongoDB = require('./db')
require('dotenv').config();

const app = express()
const cors = require('cors')
// hey this 
const port = process.env.PORT || 5000
connectToMongoDB()
app.use(express.json())
app.get('/', (req, res) => {
  res.send('This is backend')
})
const corsOptions = {
  origin:"https://mycloudbook.vercel.app"
};

app.use(cors(corsOptions));
// Available Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))


app.listen(port, () => {
  console.log(`MyCloudBook Backend running at http://localhost:${port}`)})