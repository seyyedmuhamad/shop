import * as mongoose from 'mongoose';

const options = {
    autoIndex: false, // Don't build indexes
    maxPoolSize: 10, // Maintain up to 10 socket connections
    serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    family: 4 // Use IPv4, skip trying IPv6
  };
  
mongoose.connect(`mongodb://${process.env.MONGO_HOST}:${process.env.APP_PORT}/${process.env.MONGO_DB}`, options);


mongoose.connection.on('open', () => {
    console.log('Connected to mongoose');
});
mongoose.connection.on('error', err => {
    console.log('error');
});
