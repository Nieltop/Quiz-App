import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { config } from 'dotenv';
import router from './Router/Route.js';

import connect from './Database/Connection.js';

const app = express();

/** App Middleware */
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
config();

/** Application port */
const Port = process.env.PORT || 8080;


/** Routes */

app.use('/api', router) /** Apis */


app.get('/',(req, res) => {
  try {
    res.json("Get Request")
  } catch (error) {
    res.json(error)
  }
})

/** Start server only when we have a valid connection */

connect().then(() => {
  try {
    app.listen(Port, () => {
      console.log(`Server connected to http://localhost:${Port}`);
    })
  } catch (error) {
    console.log("Cannot connect to the server");
    
  }
}).catch(error => {
  console.log("Invalid Database Connection");
  
})

