const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const indexRouter = require('./routes/index');

const app = express();

const corsConfig = {
  credentials: true,
  origin: true,
};

// app.use(timeout('120s'));
app.use(cors(corsConfig));

// app.use(morgan('dev'));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: false, limit: '50mb' }));
app.use(cookieParser());

app.use('/', indexRouter);

module.exports = app;
