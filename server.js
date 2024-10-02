require('dotenv').config(); // Carrega variáveis de ambiente

const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware para servir arquivos estáticos (HTML, CSS, JS do front-end)
app.use(express.static(path.join(__dirname, 'nextgen'))); // Garantindo que o caminho está correto

// Middleware para analisar dados de formulário (JSON e URL-encoded)
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());  // Necessário para processar JSON

// Rota para processar o formuário de orçamento
app.post('/send-email', (req, res) => {
  const { name, email, details } = req.body;

  // Configura o transportador do Nodemailer
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,  // Usando variável de ambiente
      pass: process.env.EMAIL_PASS   // Usando variável de ambiente
    }
  });

  // Configura o e-mail que será enviado
  const mailOptions = {
    from: email,
    to: 'nextgencode32@gmail.com',  // Seu email de recebimento
    subject: `Novo orçamento de ${name}`,
    text: `Nome: ${name}\nEmail: ${email}\nDetalhes do projeto: ${details}`
  };

  // Envia o e-mail
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Ocorreu um erro ao enviar o e-mail.');
    } else {
      console.log('Email enviado: ' + info.response);
      res.status(200).send('Email enviado com sucesso!');
    }
  });
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

