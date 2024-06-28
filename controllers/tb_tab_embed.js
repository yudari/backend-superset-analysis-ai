// controllers/_tb_tab_embed.js
import initModels from "../models/init-models.js"; // pastikan path ini benar
import sequelize from "../util/database.js";

const models = initModels(sequelize);

const getAllTb_Embed = async (req, res, next) => {
    console.log(`Ini tb embed berjalan`);
    models.tb_tab_embed.findAll()
        .then(data => {
            res.status(200).json({ data: data });
        })
        .catch(err => console.log(err));
};

export {
    getAllTb_Embed
};
