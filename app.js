// app.js
const express = require('express');
const mongoose = require('./database'); // Conexión a MongoDB
const User = require('./models/User'); // Modelo de Usuario
const bcrypt = require('bcryptjs');
const cors = require('cors');

const app = express();
app.use(express.json()); // Para interpretar JSON en las solicitudes

app.use(cors());

app.use(express.urlencoded({ extended: true }));

// Ruta de registro
app.post('/register', async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Verificar si el usuario ya existe
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).send('El correo electrónico ya está registrado');
    }

    // Crear un nuevo usuario
    const newUser = new User({
      username,
      email,
      password,
    });

    await newUser.save();
    res.status(201).send('Usuario registrado con éxito');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al registrar el usuario');
  }
});

// Ruta de login
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Buscar el usuario por correo electrónico
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).send('Correo electrónico o contraseña incorrectos');
    }

    // Comparar la contraseña
    const isMatch = await user.matchPassword(password);
    if (!isMatch) {
      return res.status(400).send('Correo electrónico o contraseña incorrectos');
    }

    res.status(200).send('Login exitoso');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al iniciar sesión');
  }
});

// Servidor
app.listen(3000, () => {
  console.log('Servidor en ejecución en http://localhost:3000');
});
