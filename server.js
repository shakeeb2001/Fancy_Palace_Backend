// // const express = require('express');
// // const mongoose = require('mongoose');
// // const bodyParser = require('body-parser');
// // const cors = require('cors');
// // const itemRoutes = require('./routes/itemRoutes');
// // require('dotenv').config();

// // const app = express();

// // // Middleware
// // app.use(bodyParser.json());
// // app.use(cors());

// // // Routes
// // app.use('/api', itemRoutes);

// // // Connect to MongoDB
// // mongoose.connect(process.env.MONGO_URI, {
// //   useNewUrlParser: true,
// //   useUnifiedTopology: true,

// // })
// //   .then(() => console.log('MongoDB connected'))
// //   .catch(err => console.log('MongoDB connection error:', err));

// // // Global error handler
// // app.use((err, req, res, next) => {
// //   console.error(err.stack);
// //   res.status(500).send('Something broke!');
// // });

// // // Start the server
// // const PORT = process.env.PORT || 4000;
// // app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const itemRoutes = require('./routes/itemRoutes');
// require('dotenv').config();

// const app = express();

// // Middleware
// app.use(bodyParser.json());
// app.use(cors());

// // Routes
// app.use('/api', itemRoutes);

// // Connect to MongoDB
// mongoose.connect(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
//   .then(() => console.log('MongoDB connected'))
//   .catch(err => {
//     console.error('MongoDB connection error:', err);
//     process.exit(1); // Exit the process if there's a MongoDB connection error
//   });

// // Global error handler
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).send('Something broke!');
// });

// // Start the server
// const PORT = process.env.PORT || 4000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// module.exports = app;

// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const itemRoutes = require('./routes/itemRoutes');
// require('dotenv').config();

// const app = express();

// // Middleware
// app.use(bodyParser.json());
// app.use(cors());

// // Routes
// app.use('/api', itemRoutes);

// // Connect to MongoDB
// mongoose.connect(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
//   .then(() => console.log('MongoDB connected'))
//   .catch(err => {
//     console.error('MongoDB connection error:', err);
//     process.exit(1); 
//   });

// // Global error handler
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).send('Something broke!');
// });

// // Start the server
// const PORT = process.env.PORT || 4000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// // WebSocket server
// require('./websocket-server');

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const itemRoutes = require('./routes/itemRoutes');
require('dotenv').config();

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use('/api', itemRoutes);

// Simple login route
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Hardcoded credentials for demonstration
  const validUsername = 'fancy';
  const validPassword = '1234';

  if (username === validUsername && password === validPassword) {
    res.status(200).json({ message: 'Login successful!' });
  } else {
    res.status(401).json({ message: 'Invalid username or password' });
  }
});

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => {
    console.error('MongoDB connection error:', err);
    process.exit(1); 
  });

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// WebSocket server
require('./websocket-server');
