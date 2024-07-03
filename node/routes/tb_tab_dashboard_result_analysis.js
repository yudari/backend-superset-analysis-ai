// routes/tb_tab_embed.js
import { Router } from 'express';
import { } from '../controllers/tb_tab_dashboard_embed.js';
import { createTabDashboardResultAnalysis, upload } from '../controllers/tb_tab_dashboard_chart_result_analysis.js';


const routerTbTabDashboardResultAnalysis = Router();

routerTbTabDashboardResultAnalysis.post('/tb_tab_dashboard_result_analysis/', upload.single('path_image_analysis_tab_chart'), createTabDashboardResultAnalysis);


export default routerTbTabDashboardResultAnalysis;
