const express = require('express');
const router = express.Router();

// "banco de dados" temporário
const users = [];

// listar usuários
router.get('/', (req, res) => {
  res.json(users);
});

// cadastrar usuário
router.post('/', (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({
      error: 'Nome e email são obrigatórios'
    });
  }

  const newUser = {
    id: users.length + 1,
    name,
    email
  };

  users.push(newUser);

  return res.status(201).json(newUser);
});

module.exports = router;
