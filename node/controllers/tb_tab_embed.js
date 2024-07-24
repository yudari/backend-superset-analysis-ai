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

const createAllTbTabEmbed = async (req, res, next) => {
    try {
        const { title_tab_dashboard, author_tab_dashboard, date_tab_dashboard } =
            req.body;

        // Check for existing entry with the same title, author, and date
        const existingTab = await models.tb_tab_embed.findOne({
            where: {
                title_tab_dashboard,
                author_tab_dashboard,
            },
        });
        if (existingTab) {
            // Jika entri sudah ada, kembalikan respons yang menunjukkan bahwa tab sudah ada
            res.status(200).json({
                message: "Tab sudah ada",
                data: existingTab,
            });
        } else {
            // Jika entri yang ada tidak ditemukan, buat yang baru
            const dataTab = await models.tb_tab_embed.create({
                title_tab_dashboard,
                author_tab_dashboard,
                date_tab_dashboard,
            });

            // Jika entri berhasil dibuat, kembalikan respons yang menunjukkan bahwa tab telah dibuat
            res.status(201).json({
                message: "Tab berhasil dibuat",
                data: dataTab,
            });
        }
    } catch (err) {
        // Log the error for debugging purposes
        console.error(err);

        // Send an error response
        res.status(500).json({
            message: "Terjadi kesalahan saat membuat tab",
            error: err.message,
        });
    }
};

const getTbEmbedByOne = async (req, res, next) => {
    const { idTbEmbed } = req.params;
    try {
        const TbEmbed = await models.tb_tab_embed.findOne({
            where: {
                id_tab_dashboard: idTbEmbed
            }
        })

        res.status(201).json({ message: 'Get tb tab successfully', data: TbEmbed })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
export {
    getAllTb_Embed,
    createAllTbTabEmbed,
    getTbEmbedByOne
};


