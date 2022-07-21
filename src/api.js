const express = require('express');
const authRoute = require('./routes/authRoute');
const errorMidleware = require('./middlewares/errorMiddleware');

// ...

const app = express();

app.use(express.json());

// ...

app.use('/login', authRoute);

app.use(errorMidleware);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
