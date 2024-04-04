const http = require('http');
const mongoose = require('mongoose');

const app = require('./app');

const { loadPlanetsData } = require('./models/planets.model');

const PORT = process.env.PORT || 8000;

const MONGO_URL =
    'mongodb+srv://parikhitbaruah97:jiSuSU4LPoLtq92T@nasa-api.va46vzk.mongodb.net/?retryWrites=true&w=majority&appName=nasa-api';

const server = http.createServer(app);

mongoose.connection.once('open', () => console.log('MonogDB connection ready!'));

mongoose.connection.on('error', (err) => console.error(err));

async function startServer() {
    await mongoose.connect(MONGO_URL);

    await loadPlanetsData();
}

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
});

startServer();
