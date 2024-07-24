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

const getOneTabDashboardResultAnalysis = async (req, res, next) => {
    const { idTabResultAnalysis } = req.params;
    try {
        const response = await models.tb_tab_dashboard_result_analysis.findOne({
            where: {
                id_tb_tab_dashboard_result_analysis: idTabResultAnalysis
            }
        })
        res.status(200).json({ message: "Get data successfully", data: response })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}


const insertTabDashboardResultAnalysis = async (req, res) => {
    const { id_tab, result_analysis_chart } = req.body;
    const path_image_analysis_chart = req.file ? req.file.path : null;

    console.log('ini nilai path_image_analysis_chart: ', path_image_analysis_chart)
    try {
        // const data = await models.tb_tab_dashboard_result_analysis.findOne({
        //     where: {
        //         id_tb_tab_dashboard_result_analysis: id_tab_dashboard_chart,
        //     }
        // });

        // if (data !== null) {
        //     await models.tb_tab_dashboard_result_analysis.destroy({
        //         where: {
        //             id_tb_tab_dashboard_result_analysis: id_tab_dashboard_chart,
        //         }
        //     });
        // }

        const dataDashboardResultAnalysis = await models.tb_tab_dashboard_result_analysis.create({
            result_analysis_tab_chart: result_analysis_chart,
            path_image_analysis: path_image_analysis_chart,
            id_tb_tab_dashboard_result_analysis: generateUniqueId()
        });

        const dataTabEmbedResultAnalysis = await models.tb_tab_embed_result_analysis.create({
            id_tb_tab_embed_result_analysis: generateUniqueId(),
            id_tb_tab_dashboard_result_analysis: dataDashboardResultAnalysis.id_tb_tab_dashboard_result_analysis,
            id_tab_dashboard_chart: id_tab
        })

        res.status(200).json({ message: 'Data berhasil dimasukan', data: dataDashboardResultAnalysis });
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
}

const resetTabDashboardResultAnalysis = async (req, res) => {
    const { id_tab, result_analysis_chart, id_tb_tab_dashboard_result_analysis } = req.body;
    const path_image_analysis_chart = req.file ? req.file.path : null;

    try {
        // Temukan data dashboard result analysis berdasarkan result_analysis_tab_chart
        const dataDashboardResult = await models.tb_tab_dashboard_result_analysis.findOne({
            where: {
                id_tb_tab_dashboard_result_analysis: id_tb_tab_dashboard_result_analysis,
            }
        });

        // Jika data ditemukan, hapus data yang sesuai di tb_tab_embed_result_analysis
        if (dataDashboardResult !== null) {
            const dataTabDashboardResult = await models.tb_tab_embed_result_analysis.findOne({
                where: {
                    id_tb_tab_dashboard_result_analysis: dataDashboardResult.id_tb_tab_dashboard_result_analysis
                }
            });

            if (dataTabDashboardResult !== null) {
                await models.tb_tab_embed_result_analysis.destroy({
                    where: {
                        id_tb_tab_dashboard_result_analysis: dataTabDashboardResult.id_tb_tab_dashboard_result_analysis
                    }
                });
            }

            // Hapus data dari tb_tab_dashboard_result_analysis
            await models.tb_tab_dashboard_result_analysis.destroy({
                where: {
                    result_analysis_tab_chart: dataDashboardResult.result_analysis_tab_chart,
                }
            });
        }

        // Buat data baru di tb_tab_dashboard_result_analysis
        const dataDashboardResultAnalysis = await models.tb_tab_dashboard_result_analysis.create({
            result_analysis_tab_chart: result_analysis_chart,
            path_image_analysis: path_image_analysis_chart,
            id_tb_tab_dashboard_result_analysis: generateUniqueId()
        });

        // Buat data baru di tb_tab_embed_result_analysis
        await models.tb_tab_embed_result_analysis.create({
            id_tb_tab_dashboard_result_analysis: dataDashboardResultAnalysis.id_tb_tab_dashboard_result_analysis,
            id_tab_dashboard_chart: id_tab
        });

        res.status(200).json({ message: 'Data berhasil dimasukan', data: dataDashboardResultAnalysis });
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
}


export {
    upload,
    getOneTabDashboardResultAnalysis,
    resetTabDashboardResultAnalysis,
    insertTabDashboardResultAnalysis
};


