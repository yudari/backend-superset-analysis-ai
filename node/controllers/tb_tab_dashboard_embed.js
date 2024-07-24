// controllers/_tb_tab_embed.js
import multer from "multer";
import initModels from "../models/init-models.js"; // pastikan path ini benar
import sequelize from "../util/database.js";
import { generateUniqueId } from "../util/helper.js"

const models = initModels(sequelize);



const getDashboardChartById = async (req, res, next) => {
    const { id_dashboard, id_slice, title_tab, author_tab } = req.query;
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Januari = 0
    const year = today.getFullYear();
    const formattedDate = `${day}-${month}-${year}`;
    console.log(req.query);

    try {
        const dataTabEmbed = await models.dashboard_slices.findOne({
            where: {
                dashboard_id: id_dashboard,
                slice_id: id_slice
            },
            include: [{
                model: models.dashboards,
                as: 'dashboard'
            }, {
                model: models.slices,
                as: 'slouse'
            }]
        });

        const existingEmbed = await models.tb_tab_dashboard_embed.findOne({
            where: {
                id_tab_dashboard_chart: dataTabEmbed.id
            }
        });

        if (existingEmbed) {
            await models.tb_tab_dashboard_embed.destroy({
                where: {
                    id_tab_dashboard_chart: dataTabEmbed.id 
                }
            });
        }

        const dashboardEmbed = await models.tb_tab_embed.create({
            title_tab_dashboard: title_tab,
            author_tab_dashboard: author_tab,
            date_tab_dashboard: formattedDate,
        });

        const newEmbed = await models.tb_tab_dashboard_embed.create({
            id_tb_tab_dashboard_embed: generateUniqueId(),
            id_tab_dashboard_chart: dataTabEmbed.id,
            id_tab_dashboard: dashboardEmbed.id_tab_dashboard
        });

        res.status(200).json({ response: newEmbed });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'An error occurred', error: err.message });
    }
};


export {
    getDashboardChartById,

};
