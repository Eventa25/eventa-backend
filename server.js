import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import eventbriteRoutes from './routes/eventbrite.js';
import eventosRoutes from './routes/eventos.js';

dotenv.config();
const app = express();
app.use(cors());

app.use('/api', eventbriteRoutes);
app.use('/api', eventosRoutes);

app.get('/', (req, res) => {
  res.send('✅ Eventa backend está online e funcional.');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor ativo na porta ${PORT}`));
