const express = require('express');
const app = express();
const cors = require('cors');
const userRoutes = require('./routes/userRoute');
const memberRoutes = require('./routes/memberRoutes')
const path = require("path");
const userdocumentRoutes = require('./routes/userDocumentRoute')
const memberDocumentRoutes = require('./routes/memberDocumentRoutes')

app.use(cors({
    origin: 'http://localhost', // Allow frontend origin
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
  }));
  app.use(express.json());

// Middleware for parsing JSON and URL-encoded bodies
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/images", express.static("uploads/images"));

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// User routes
app.use('/api/v1/users', userRoutes);
app.use('/api/v1/user/document', userdocumentRoutes);

//member
app.use('/api/v1/members', memberRoutes);
app.use('/api/v1/member/document', memberDocumentRoutes);

module.exports = app;
