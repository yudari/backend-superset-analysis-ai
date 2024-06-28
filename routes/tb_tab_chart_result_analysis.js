// routes/tb_tab_embed.js
import { Router } from 'express';
import { insertChartResultAnalysis, upload } from '../controllers/tb_chart_result_analysis.js';


const routerTabChartResultAnalysis = Router();

routerTabChartResultAnalysis.post('/tb_tab_chart_result_analysis/', upload.single('image'), insertChartResultAnalysis);

export default routerTabChartResultAnalysis;
