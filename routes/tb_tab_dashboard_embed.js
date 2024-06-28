// routes/tb_tab_embed.js
import { Router } from 'express';
import { getDashboardChartById } from '../controllers/tb_tab_dashboard_embed.js';


const routerTbTabDashboardEmbed = Router();

routerTbTabDashboardEmbed.get('/tb_tab_dashboard_embed/', getDashboardChartById);

export default routerTbTabDashboardEmbed;
