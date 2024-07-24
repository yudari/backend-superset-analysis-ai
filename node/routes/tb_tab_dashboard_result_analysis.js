// routes/tb_tab_embed.js
import { Router } from 'express';
import { getOneTabDashboardResultAnalysis, resetTabDashboardResultAnalysis, upload, insertTabDashboardResultAnalysis } from '../controllers/tb_tab_dashboard_chart_result_analysis.js';
import { } from '../controllers/tb_tab_dashboard_embed.js';


const routerTbTabDashboardResultAnalysis = Router();

routerTbTabDashboardResultAnalysis.post('/tb_tab_dashboard_result_analysis/reset', upload.single('path_image_analysis_tab_chart'), resetTabDashboardResultAnalysis);

routerTbTabDashboardResultAnalysis.post('/tb_tab_dashboard_result_analysis/create', upload.single('path_image_analysis_tab_chart'), insertTabDashboardResultAnalysis);

routerTbTabDashboardResultAnalysis.get('/tb_tab_dashboard_result_analysis/:idTabResultAnalysis', getOneTabDashboardResultAnalysis)

export default routerTbTabDashboardResultAnalysis;
