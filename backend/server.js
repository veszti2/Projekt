require('dotenv').config();

const path = require('node:path');
const express = require('express');
const app = express();

app.use('/css', express.static(path.join(__dirname, 'public', 'css')));
app.use('/js', express.static(path.join(__dirname, 'public', 'js')));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'public')));

const PORT = process.env.PORT || 3500;

const dbConnection = require('./utils/dbConnection.js');

dbConnection()
    .then(() => {
        console.log('Sikeres adatbázis csatlakozás!');
        app.listen(PORT, () => {
            console.log(`http://localhost:${PORT}/api`);
        });
    })
    .catch((error) => {
        console.log(error.message);
    });

app.use('/api', require('./routes/mainRoutes.js'));
app.use('/api/users-backend', require('./routes/userRoutesBackend.js'));
app.use('/api/trainers', require('./routes/TrainersRoutesBackend.js'));
app.use('/api/new-trainer', require('./routes/NewTrainersRoutesBackend.js'));