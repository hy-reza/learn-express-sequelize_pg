const express = require('express')
const cors = require('cors')
require('dotenv').config()

const app = express()
//DB
const db = require('./models')
// db.sequelize.sync()


app.use(express.json()) 
app.use(cors()) 
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  try {
    res.status(200).json({ message: 'Welcome to my API'})
  } catch (error) {
    res.status(500).json({ message: error.message })    
  }
})

const PORT = process.env.PORT || 3000

require('./routes/tutorial.routes')(app)

app.listen(PORT, () => {
  console.info(`Server allready listening for request on http://localhost:${PORT}`);
})