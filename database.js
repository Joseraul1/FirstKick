const mongoose = require('mongoose');

// URL de conexión con MongoDB
mongoose.connect('mongodb://localhost:27017/firstkick-app', {
})
.then(() => console.log('Conexión a la base de datos exitosa'))
.catch(err => console.log('Error al conectar a la base de datos:', err));
