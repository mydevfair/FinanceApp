const mongoose = require('mongoose');

const db = async () => {
    try {
       mongoose.set('strictQuery', false);
        await mongoose.connect(process.env.MONGO_URL)
        console.log('db connection success');
    } catch (error) {
        console.log('db connection failed');
    }
}

module.exports = {db}