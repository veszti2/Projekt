require('dotenv').config();

const path = require('node:path');
const express = require('express');
const app = express();
const connectDB = require('./utils/dbConnection');
const mongoose = require('mongoose');
const userRoutes = require('./routes/UserRoutesBackend');

const MONGO_URI = process.env.MONGO_URI || '???'
connectDB(MONGO_URI);

app.use('/css', express.static(path.join(__dirname, 'public', 'css')));
app.use('/js', express.static(path.join(__dirname, 'public', 'js')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/api', userRoutes);

app.get('/', (req, res) => res.render('index'));
app.get('/users', (req, res) => res.render('users'));
app.get('/trainers', async (req, res) => {

  res.render('index');
});

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("✅ Sikeres csatlakozás a MongoDB-hez!"))
.catch((err) => console.error("❌ MongoDB hiba:", err));

require('dotenv').config();

app.use(express.static(path.resolve(__dirname, 'public')));

const PORT = process.env.PORT || 3500;

const dbConnection = require('./utils/dbConnection.js');

dbConnection()
    .then(() => {
        console.log('Sikeres adatbázis csatlakozás!');
        app.listen(PORT, () => {
            console.log(`http://localhost:${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error.message);
    });

// app.listen(PORT, () => {
//     console.log(`http://localhost:${PORT}`);
//     app.set('view engine', 'ejs');
// });

app.get('/', (req, res) => {
    try {
        res.statusCode = 200;
        return res.render('index.ejs');
    }
    catch (error) {
        res.statusCode = 404;
        return res.render('404.ejs');
    }
});

app.use('/users-backend', require('./routes/UserRoutesBackend.js'));
app.set('view')
app.use(express.json());