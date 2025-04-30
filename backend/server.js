const app = require('./app');
const connectDB = require('./database/db');
require('dotenv').config();

const port = process.env.PORT || 3000;
const host = '0.0.0.0'; // Listen on all interfaces

const server = app.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});