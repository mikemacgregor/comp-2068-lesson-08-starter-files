// Setting up environment variables


// Our server setup
const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

// Connecting Mongo and setting up Mongoose


// Implementing Body Parser


// registering the routes
const routes = require('./routes');
const router = routes(express.Router());
app.use(router);

// error handling
const { handle404s, errorHandler } = require('./errorHandling');
app.use(handle404s);
app.use(errorHandler);

app.listen(4000, () => console.log("Always watching... on port 4000"));