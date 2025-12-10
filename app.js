const express = require('express');

const app = express();
const port = process.env.PORT || 8080;
const path = require('node:path');
const HompageRouter = require('./routes/indexRouter');
const NewMessageRouter = require('./routes/new');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use("/", HompageRouter);
app.use("/new", NewMessageRouter);


// Error handling middleware    
app.use((err, req, res, next) => {
    console.error(err);
    res.status(err.status).send(err.message);
})


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})