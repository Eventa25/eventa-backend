import express from 'express';
import axios from 'axios';
const router = express.Router();

const EB_TOKEN = process.env.EVENTBRITE_TOKEN;

router.get('/eventbrite-events', async (req, res) => {
  const { lat, lon, radius = '20km' } = req.query;
  
  console.log('TOKEN USADO:', EB_TOKEN);
  console.log("PARAMS ENVIADOS:", {
    'location.latitude': lat,
    'location.longitude': lon,
    'location.within': radius,
    expand: 'venue'
  });

  try {
    const response = await axios.get('https://www.eventbriteapi.com/v3/events/search/', {
      headers: { Authorization: `Bearer ${EB_TOKEN}` },
      params: {
        'location.latitude': lat,
        'location.longitude': lon,
        'location.within': radius,
        expand: 'venue'
      }
    });

    res.json(response.data.events);
  } catch (error) {
    console.error('Erro Eventbrite:', error.response?.data || error);
    res.status(500).json({ error: 'Erro ao obter eventos da Eventbrite' });
  }
});

export default router;
