import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { config } from 'dotenv';

const app = express();

/** App Middleware */
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
config();

/** Application port */
const Port = process.env.PORT || 8080;

/** Routes */
app.get('/',(req, res) => {
  try {
    res.json("Get Request")
  } catch (error) {
    res.json(error)
  }
})

app.listen(Port, () => {
  console.log(`Server connected to http://localhost:${Port}`);
  
})