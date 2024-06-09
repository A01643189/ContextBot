const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');

const app = express();
const port = 3000;

const userRoutes = require('./routes/userRoutes');
const descriptionRoutes = require('./routes/descriptionRoutes');
const feedbackRoutes = require('./routes/feedbackRoutes');
const chatRoutes = require('./routes/chatRoutes');

//express functions
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//testing
app.get('/', (req, res) => {
  res.send('Hello World! from Node');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

app.use('/users', userRoutes);
app.use('/description', descriptionRoutes);
app.use('/feedback', feedbackRoutes);
app.use('/chat', chatRoutes);