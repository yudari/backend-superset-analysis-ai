// controllers/_tb_tab_embed.js
import initModels from "../models/init-models.js"; // pastikan path ini benar
import sequelize from "../util/database.js";
import multer from "multer";
import path from "path";

const models = initModels(sequelize);

// Konfigurasi Multer untuk penyimpanan file
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // tentukan folder penyimpanan
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // penamaan file dengan timestamp
    }
});

const upload = multer({ storage: storage });

const insertChartResultAnalysis = async (req, res, next) => {
    const { id_tab_dashboard_chart, id_chart, result_analysis_chart } = req.body;
    const path_image_analysis_chart = req.file ? req.file.path : null;

    models.tb_chart_result_analysis.create({
        id_tab_dashboard_chart: id_tab_dashboard_chart,
        id_chart: id_chart,
        result_analysis_chart: result_analysis_chart,
        path_image_analysis_chart: path_image_analysis_chart
    }).then((response) => {
        res.status(200).json({ message: 'Data berhasil dimasukan', data: response });
    }).catch((err) => {
        res.status(404).json({ message: err.message });
    });
}

export {
    insertChartResultAnalysis,
    upload
}