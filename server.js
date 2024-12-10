import express from 'express';
const app = express();
const port = process.env.PORT || 8080;
import colors from 'colors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoute.js';
import cors from 'cors';

//configure ENV
dotenv.config();

//databese connection
connectDB();

//middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

//Routes
app.use('/api/v1/auth', authRoutes)

// rest API
app.get('/', (req, res) => {
    res.send('Welcome to Server!')
})

//run
app.listen(port, () => {
    console.log(`Server Chal Gaya`.bgGreen.white)
  })