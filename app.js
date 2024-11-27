// app.js (servidor)
const express = require('express');
const mongoose = require('./database');
const User = require('./models/User');
const Post = require('./models/Post');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// Ruta de registro
app.post('/register', async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).send('El correo electrónico ya está registrado');
        }
        const newUser = new User({ username, email, password });
        await newUser.save();
        res.status(201).send('Usuario registrado con éxito');
    } catch (error) {
        res.status(500).send('Error al registrar el usuario');
    }
});

// Ruta de login
app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).send('Correo electrónico o contraseña incorrectos');
        }
        const isMatch = await user.matchPassword(password);
        if (!isMatch) {
            return res.status(400).send('Correo electrónico o contraseña incorrectos');
        }
        res.status(200).send('Login exitoso');
    } catch (error) {
        res.status(500).send('Error al iniciar sesión');
    }
});

// Ruta para crear publicaciones
app.post('/createPost', async (req, res) => {
    const { content, author } = req.body;
    try {
        const newPost = new Post({ content, author });
        await newPost.save();
        res.status(201).send('Publicación creada con éxito');
    } catch (err) {
        res.status(400).send('Error al crear la publicación');
    }
});

// Ruta para obtener las publicaciones
app.get('/getPosts', async (req, res) => {
    try {
        const posts = await Post.find().sort({ createdAt: -1 });
        res.json(posts);
    } catch (err) {
        res.status(500).send('Error al obtener las publicaciones');
    }
});

// Iniciar el servidor
app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
});

//Traduccion de la pagina de español a ingles 