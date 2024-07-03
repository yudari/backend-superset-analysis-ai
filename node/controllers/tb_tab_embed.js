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
    const { title_tab_dashboard, author_tab_dashboard, date_tab_dashboard } = req.body;

    try {
        // Check for existing entry with the same title, author, and date
        const existingTab = await models.tb_tab_embed.findOne({
            where: {
                title_tab_dashboard,
                author_tab_dashboard,
                date_tab_dashboard
            }
        });

        if (existingTab) {
            // If an entry already exists, return a response indicating so
            return res.status(409).json({ message: 'Tab with the same title, author, and date already exists' });
        }

        // If no existing entry is found, create a new one
        const dataTab = await models.tb_tab_embed.create({
            title_tab_dashboard,
            author_tab_dashboard,
            date_tab_dashboard
        });

        // Send a success response
        res.status(201).json({ message: 'Tab created successfully', data: dataTab });
    } catch (err) {
        // Log the error for debugging purposes
        console.error(err);

        // Send an error response
        res.status(500).json({ message: err.message });
    }
};

export {
    getAllTb_Embed,
    createAllTbTabEmbed
};


