import express from 'express';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();
const router = express.Router();

const EVENTBRITE_TOKEN = process.env.EVENTBRITE_TOKEN;
const ORGANIZATION_ID = process.env.EVENTBRITE_ORGANIZATION_ID;

// Buscar eventos de uma organização específica no Eventbrite
router.get('/eventbrite', async (req, res) => {
  try {
    const response = await axios.get(
      `https://www.eventbriteapi.com/v3/organizations/${ORGANIZATION_ID}/events/`,
      {
        headers: {
          Authorization: `Bearer ${EVENTBRITE_TOKEN}`
        }
      }
    );
    res.json(response.data);
  } catch (error) {
    console.error('Erro ao buscar eventos do Eventbrite:', error.message);
    res.status(500).json({ error: 'Erro ao buscar eventos do Eventbrite.' });
  }
});

export default router;


