const express = require('express');

const app = express();
app.use(express.json());

// rota principal
app.get('/', (req, res) => {
  res.send('API funcionando 🚀');
});

// rotas de usuários
const userRoutes = require('./routes/users.routes');
app.use('/users', userRoutes);

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
