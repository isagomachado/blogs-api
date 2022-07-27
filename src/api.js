const express = require('express');
// require('express-async-errors')
const authRoute = require('./routes/authRoute');
const userRoute = require('./routes/userRoute');
const categoriesRoute = require('./routes/categoriesRoute');
const blogPostRoute = require('./routes/blogPostRoute');
const errorMidleware = require('./middlewares/errorMiddleware');

// ...

const app = express();

app.use(express.json());

// ...
app.use('/categories', categoriesRoute);

app.use('/login', authRoute);

app.use('/post', blogPostRoute);

app.use('/user', userRoute);

app.use(errorMidleware);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
