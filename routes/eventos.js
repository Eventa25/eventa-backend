import express from 'express';
const router = express.Router();

router.get('/eventos', (req, res) => {
  // Exemplo estático — substituir futuramente com BD ou API pública
  const eventosExemplo = [
    {
      id: 1,
      titulo: 'Festival de Jazz na Praça',
      local: 'Lisboa',
      data: '2025-07-15'
    },
    {
      id: 2,
      titulo: 'Oficina de Cerâmica',
      local: 'Porto',
      data: '2025-07-20'
    }
  ];

  res.json(eventosExemplo);
});

export default router;
