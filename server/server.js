const express = require('express');
const cors = require('cors');
require('dotenv').config();

const  handleAPI= require('./routes/weather');  //weatherRoute

const app = express();
app.use(cors());
app.use('/weather', handleAPI);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => 
    console.log(`Server running on port  very smoothly${PORT}`));
