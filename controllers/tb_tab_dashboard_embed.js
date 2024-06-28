// controllers/_tb_tab_embed.js
import initModels from "../models/init-models.js"; // pastikan path ini benar
import sequelize from "../util/database.js";

const models = initModels(sequelize);


const getDashboardChartById = async (req, res, next) => {
    const { id_dashboard, id_slice, title_tab, author_tab } = req.query
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Januari = 0
    const year = today.getFullYear();

    const formattedDate = `${day}-${month}-${year}`;
    console.log(req.query)
    models.dashboard_slices.findOne({
        where: {
            dashboard_id: 12
        },
        include: [{
            model: models.dashboards,
            as: 'dashboard'
        }, {
            model: models.slices,
            as: 'slouse'
        },]
    }).then(dataTabEmbed => {
        models.tb_tab_embed.create({
            title_tab_dashboard: title_tab,
            author_tab_dashboard: author_tab,
            date_tab_dashboard: formattedDate
        }).then((dashboard_embed) => {
            models.tb_tab_dashboard_embed.create({
                id_tab_dashboard_chart: dataTabEmbed.id,
                id_tab_dashboard: dashboard_embed.id_tab_dashboard
            }).then((data) => {
                res.status(200).json({ response: data });
            })
        })
    })
        .catch(err => console.log(err));
}

export {
    getDashboardChartById
}