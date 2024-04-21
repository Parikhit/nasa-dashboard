const mongoose = require('mongoose');

mongoose.connection.once('open', () => console.log('MonogDB connection ready!'));

mongoose.connection.on('error', (err) => console.error(err));

async function mongoConnect() {
    await mongoose.connect(process.env.MONGO_ID);
}

async function mongoDisconnect() {
    await mongoose.disconnect();
}

module.exports = { mongoConnect, mongoDisconnect };
