// routes/tb_tab_embed.js
import { Router } from 'express';
import { getAllTb_Embed } from '../controllers/tb_tab_embed.js'; // pastikan path ini benar

const routerTbTabEmbed = Router();

routerTbTabEmbed.get('/tb_tab_embed/', getAllTb_Embed);

export default routerTbTabEmbed;
