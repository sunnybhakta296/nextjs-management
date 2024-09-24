import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        // Replace 'your_mongodb_uri' with your actual MongoDB connection string
        await mongoose.connect(process.env.MONGO_URL!, {
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
        });
        console.log('MongoDB connected');
    } catch (error) {
        console.error('Failed to connect to MongoDB', error);
    }
};

export default connectDB;