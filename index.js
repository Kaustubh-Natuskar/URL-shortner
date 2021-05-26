const express = require('express');

const connectDB = require('./config/db');

const app = express();

connectDB();

app.use(express.json({ extended: false }));

// Define routes for
app.use('/', require('./routes/index'));
app.use('/api/url', require('./routes/url'));

const PORT = 5000;

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
