// routes/tb_tab_embed.js
import { Router } from 'express';
import { getDashboardChartById } from '../controllers/tb_tab_dashboard_embed.js';


const routerTbTabDashboardEmbed = Router();

routerTbTabDashboardEmbed.get('/tb_tab_dashboard_embed/', getDashboardChartById);
// routerTbTabDashboardEmbed.post('/tb_tab_dashboard_embed/', upload.single('path_image_analysis_tab_chart'), createTabDashboardResultAnalysis)

export default routerTbTabDashboardEmbed;
