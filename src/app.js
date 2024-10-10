const express = require('express');

const port = process.env.PORT || process.env.NODE_PORT || 3000;

const app = express();

const path = require('path');

const filePath404Page = path.resolve(__dirname, '../client/404.html');

const indexRouter = require('./routes/index.js');
const adminRouter = require('../client/admin.html');

// import routes (put this near top)
// ...
const quotesRouter = require('./routes/quotes.js');
const apiRouter = require('./routes/api.js');

// put this AFTER we instantiate `app`, and BEFORE our GET and POST routes
app.use(express.static('client'));
// put this right AFTER `app.use(express.static('client'));`
app.use(express.json());
app.use('/', indexRouter);
app.use('/admin', adminRouter);

// // .all refers to ALL http methods - GET, POST, DELETE etc
// // note .status(404) and method chaining
// // .status(404) is how we send the 404 - File Not Found status code
// // app.all('*', (req, res) => {
// //     res.status(404).send('<h1>404! Page not found</h1>');
// // });

// app.all('*', (req, res) => {
//     res.status(404).sendFile(filePath404Page);
// });

// use routes (put this near the bottom, BEFORE app.listen()
// ...
app.use('/quotes', quotesRouter); // now /quotes is a route!
app.use('/api', apiRouter);

app.use((req, res) => {
  res.status(404).sendFile(filePath404Page);
});

app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`);
});

// nodemon test change
