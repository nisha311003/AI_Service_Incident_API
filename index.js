const express = require('express');
const mongoose = require('mongoose');
const incidentRouter = require('./routes/incidents');
require('dotenv').config();

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=> console.log('MongoDB connected'));

app.use('/api', incidentRouter);
const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=> console.log(`Server is running on port ${PORT}`));