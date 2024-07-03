// controllers/_tb_tab_embed.js
import multer from "multer";
import initModels from "../models/init-models.js"; // pastikan path ini benar
import sequelize from "../util/database.js";
import path from "path";
import { generateUniqueId } from "../util/helper.js";
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
const getAllDashboardChartResultAnalysis = async (req, res, next) => {
    console.log(`Ini table all dashboard chart berjalan`);
    models.tb_tab_dashboard_result_analysis.findAll()
        .then(data => {
            res.status(200).json({ data: data });
        })
        .catch(err => console.log(err));
};


const createTabDashboardResultAnalysis = async (req, res) => {
    const { id_tab_dashboard_chart, result_analysis_chart } = req.body;
    const path_image_analysis_chart = req.file ? req.file.path : null;


    try {
        const data = await models.tb_tab_dashboard_result_analysis.findOne({
            where: {
                id_tab_dashboard_chart: id_tab_dashboard_chart,
            }
        });

        if (data !== null) {
            await models.tb_tab_dashboard_result_analysis.destroy({
                where: {
                    id_tab_dashboard_chart: id_tab_dashboard_chart,
                }
            });
        }

        const response = await models.tb_tab_dashboard_result_analysis.create({
            result_analysis_tab_chart: result_analysis_chart,
            path_image_analysis: path_image_analysis_chart,
            id_tb_tab_dashboard_result_analysis: generateUniqueId()
        });

        res.status(200).json({ message: 'Data berhasil dimasukan', data: response });
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
}

export {
    createTabDashboardResultAnalysis,
    upload
};


