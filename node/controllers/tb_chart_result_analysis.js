// controllers/_tb_tab_embed.js
import initModels from "../models/init-models.js"; // pastikan path ini benar
import sequelize from "../util/database.js";
import multer from "multer";
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

const insertChartResultAnalysis = async (req, res, next) => {
    const { id_dashboard_chart, id_chart, result_analysis_chart, author_tab_dashboard, date_tab_dashboard, title_tab_dashboard } = req.body;
    const path_image_analysis_chart = req.file ? req.file.path : null;

    console.log("ini path File: ", req.file);
    try {
        const data_tb_dashboard_embed = await models.dashboard_slices.findOne({
            where: {
                dashboard_id: id_dashboard_chart,
                slice_id: id_chart
            }
        });

        if (!data_tb_dashboard_embed) {
            throw new Error('Dashboard slice not found');
        }

        let dataTab = await models.tb_tab_embed.findOne({
            where: {
                author_tab_dashboard: author_tab_dashboard,
                title_tab_dashboard: title_tab_dashboard
            }
        });

        if (!dataTab) {
            dataTab = await models.tb_tab_embed.create({
                title_tab_dashboard: title_tab_dashboard,
                date_tab_dashboard: date_tab_dashboard,
                author_tab_dashboard: author_tab_dashboard,
            });
        }

        console.log('nilai dari table tb_tab_embed: ', dataTab);

        let data_tb_tab_dashboard_embed = await models.tb_tab_dashboard_embed.findOne({
            where: {
                id_tab_dashboard_chart: data_tb_dashboard_embed.id,
                id_tab_dashboard: dataTab.id_tab_dashboard
            }
        });

        if (!data_tb_tab_dashboard_embed) {
            data_tb_tab_dashboard_embed = await models.tb_tab_dashboard_embed.create({
                id_tab_dashboard_chart: data_tb_dashboard_embed.id,
                id_tab_dashboard: dataTab.id_tab_dashboard,
                id_tb_tab_dashboard_embed: generateUniqueId()
            });
        } else {
            console.log('Data already exists:', data_tb_tab_dashboard_embed);
        }

        console.log('nilai dari table tb_tab_dashboard_embed: ', data_tb_tab_dashboard_embed);

        const data = await models.tb_chart_result_analysis.findOne({
            where: {
                id_tab_chart: data_tb_tab_dashboard_embed.id_tb_tab_dashboard_embed,
                id_chart: id_chart
            }
        });

        if (data !== null) {
            await models.tb_chart_result_analysis.destroy({
                where: {
                    id_tab_chart: data_tb_tab_dashboard_embed.id_tb_tab_dashboard_embed,
                    id_chart: id_chart
                }
            });
        }

        const response = await models.tb_chart_result_analysis.create({
            id_tab_chart: data_tb_tab_dashboard_embed.id_tb_tab_dashboard_embed,
            id_chart: id_chart,
            result_analysis_chart: result_analysis_chart,
            path_image_analysis: path_image_analysis_chart,
            id_tb_chart_result_analysis: generateUniqueId()
        });

        res.status(200).json({ message: 'Data berhasil dimasukan', data: response });
    } catch (err) {
        console.error('Error inserting chart result analysis:', err);
        res.status(404).json({ message: err.message });
    }
};


const deleteChartResultAnalysis = async (req, res, next) => {
    const { id_tab_dashboard_chart, id_chart } = req.query;
    console.log(req.query)
    models.tb_chart_result_analysis.destroy({
        where: {
            id_tab_chart: id_tab_dashboard_chart,
            id_chart: id_chart
        }
    }).then((dataValues) => {
        if (dataValues === 1) {
            res.status(200).json({ message: "Deleted sucessfully" })
        } else {
            res.status(404).json({ message: "Record not found" })
        }

    }).catch((err) => {
        res.status(500).json({ message: err })
    })
}


export {
    insertChartResultAnalysis,
    upload,
    deleteChartResultAnalysis
}