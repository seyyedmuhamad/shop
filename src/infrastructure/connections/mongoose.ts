import * as mongoose from 'mongoose';

const options = {
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    useUnifiedTopology: true
  };
  
mongoose.connect(`mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DB}`, options);

mongoose.connection.on('open', () => {
    console.log('Connected to mongoose');
});
mongoose.connection.on('error', err => {
    console.log('error');
});
