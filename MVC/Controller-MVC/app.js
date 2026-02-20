const path = require('path');
const express = require('express');

const app = express();

const userRouter = require('./routes/userRouter');
const {hostRouter} = require('./routes/hostRouter');

const rootDir = require('./utils/pathUtils');

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(rootDir, 'public')));

app.use(express.urlencoded());
app.use(userRouter);
app.use('/host', hostRouter);

const errorsController = require('./controllers/errors');

app.use(errorsController.error404)

const PORT = 3000;
app.listen(PORT, () => {
  console.log('Server running on address http://localhost:' + PORT);
});