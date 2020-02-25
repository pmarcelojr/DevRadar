const express = require('express');
const mongosse = require('mongoose');
const routes = require('./routes');

const app = express();

mongosse.connect('mongodb+srv://marcelo:qwer4321@cluster0-q7aco.mongodb.net/DevRadarOficial?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(express.json());
app.use(routes);


app.listen(3333);
