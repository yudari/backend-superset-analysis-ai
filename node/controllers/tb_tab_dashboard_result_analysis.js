// // controllers/_tb_tab_embed.js
// import multer from "multer";
// import path from "path";
// import initModels from "../models/init-models.js"; // pastikan path ini benar
// import sequelize from "../util/database.js";
// const models = initModels(sequelize);


// // Konfigurasi Multer untuk penyimpanan file
// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, 'uploads/'); // tentukan folder penyimpanan
//     },
//     filename: (req, file, cb) => {
//         cb(null, Date.now() + path.extname(file.originalname)); // penamaan file dengan timestamp
//     }
// });

// const upload = multer({ storage: storage });

// const createTabDashboardResultAnalysis = async (req, res) => {
//     const { id_tab_dashboard_chart, id_tb_tab_embed, result_analysis_chart } = req.body;
//     const path_image_analysis_chart = req.file ? req.file.path : null;


//     try {
//         c
//     } catch (err) {
//         res.status(404).json({ message: err.message });
//     }
// }

// export {
//     createTabDashboardResultAnalysis,
//     upload
// };


