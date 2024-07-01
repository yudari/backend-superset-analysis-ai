import 'dotenv/config.js'
import express from 'express'
import bodyParser from "body-parser";
import sequelize from './util/database.js'
import path from 'path'

import routerTbTabEmbed from './routes/tb_tab_embed.js';
import routerTbTabDashboardEmbed from './routes/tb_tab_dashboard_embed.js';
import routerTabChartResultAnalysis from './routes/tb_tab_chart_result_analysis.js';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Middleware untuk menyajikan file statis dari folder "uploads"
app.use('/uploads', express.static(path.join(getPath(), 'uploads')));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    next();
});

//test route
app.get('/', (req, res, next) => {
    res.send(path.join(getPath(), 'uploads'));
});

app.use('/superset-ai', routerTbTabEmbed);
app.use('/superset-ai', routerTbTabDashboardEmbed)
app.use('/superset-ai', routerTabChartResultAnalysis)

//error handling
app.use((error, req, res, next) => {
    console.log(error);
    const status = error.statusCode || 500;
    const { message } = error;
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

// Fungsi untuk mendapatkan path direktori proyek
function getPath() {
    return new URL('.', import.meta.url).pathname;
}