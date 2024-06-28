import 'dotenv/config.js'
import express from 'express'
import bodyParser from "body-parser";
import sequelize from './util/database.js'


import routerTbTabEmbed from './routes/tb_tab_embed.js';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    next();
});

//test route
app.get('/', (req, res, next) => {
    res.send('Hello World');
});

app.use('/superset-ai', routerTbTabEmbed);

//error handling
app.use((error, req, res, next) => {
    console.log(error);
    const status = error.statusCode || 500;
    const message = error.message;
    res.status(status).json({ message: message });
});

//sync database
sequelize
    .sync()
    .then(result => {
        console.log("Database connected");
        app.listen(3000);
    })
    .catch(err => console.log(err));