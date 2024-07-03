const mongoose = require('mongoose');
const connectDB=async() => {
    try {
        await mongoose.connect('mongodb+srv://admin:admin@cluster0.lif3vo5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
        console.log("Connected to DB ");
    } catch (error) {
        console.log(error)
    }
}

module.exports = connectDB;