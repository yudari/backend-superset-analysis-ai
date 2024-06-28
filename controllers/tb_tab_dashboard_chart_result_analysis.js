// controllers/_tb_tab_embed.js
import initModels from "../models/init-models.js"; // pastikan path ini benar
import sequelize from "../util/database.js";

const models = initModels(sequelize);

const getAllDashboardChartResultAnalysis = async (req, res, next) => {
    console.log(`Ini table all dashboard chart berjalan`);
    models.tb_tab_dashboard_result_analysis.findAll()
        .then(data => {
            res.status(200).json({ data: data });
        })
        .catch(err => console.log(err));
};

export {
    getAllTb_Embed
};


