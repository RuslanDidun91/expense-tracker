const express = require('express');
const app = express();
const cors = require('cors');

const port = 5000;

//middleware 
app.use(cors());
app.use(express.json());

//routes
app.use(require('./routes/route'));

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});