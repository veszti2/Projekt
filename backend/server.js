require('dotenv').config();

const path = require('node:path');
const express = require('express');
const cors = require('cors');
const ejs = require('ejs');

const PORT = process.env.PORT || 3500;
const app = express();

const dir = __dirname;

app.use(express.static(path.resolve(dir, 'public')));
app.set('view engine', 'ejs');
app.use(express.json());
app.use(cors());

const dbConnect = require('./utils/dbConnection.js');

dbConnect()
    .then(() => {
        console.log('Sikeres adatbázis csatlakozás!');
        app.listen(PORT, () => {
            console.log(`http://localhost:${PORT}/api`);
        });
    })
    .catch((error) => {
        console.error(`A hiba oka: ${error.message}`);
    });

app.use('/api', require('./routes/mainRoutes.js'));
app.use('/api/users-backend', require('./routes/userRoutesBackend.js'));
app.use('/api/trainers-backend', require('./routes/TrainersRoutesBackend.js'));
app.use('/api/trainers-frontend',require('./routes/TrainersRoutesFrontend.js'));
app.use('/api/new-trainer', require('./routes/NewTrainersRoutesBackend.js'));
app.use('/api/register-frontend', require('./routes/userRegisterRoutes.js'));

app.use((req, res) => {
    try {
        res.status(404);
        return res.render('404.ejs');
    } catch (error) {
        res.status(500);
        return res.json({ msg: 'Általános szerver hiba!' });
    }
});