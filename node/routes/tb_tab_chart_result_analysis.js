// routes/tb_tab_embed.js
import { Router } from 'express';
import { deleteChartResultAnalysis, insertChartResultAnalysis, upload } from '../controllers/tb_chart_result_analysis.js';


const routerTabChartResultAnalysis = Router();

routerTabChartResultAnalysis.post('/tb_tab_chart_result_analysis/', upload.single('image_analysis_chart'), insertChartResultAnalysis);

routerTabChartResultAnalysis.delete('/tb_tab_chart_result_analysis/deleted/', deleteChartResultAnalysis);




export default routerTabChartResultAnalysis;
