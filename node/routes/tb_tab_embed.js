// routes/tb_tab_embed.js
import { Router } from 'express';
import { createAllTbTabEmbed } from '../controllers/tb_tab_embed.js'; // pastikan path ini benar

const routerTbTabEmbed = Router();
routerTbTabEmbed.post('/tb_tab_embed/', createAllTbTabEmbed)

export default routerTbTabEmbed;
