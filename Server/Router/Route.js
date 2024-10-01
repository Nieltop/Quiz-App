import { Router } from "express";
const router = Router();


/** Import Controllers */

import * as Controller from '../Controllers/Controller.js'

/** Questions Routes API*/

router.get("/questions", Controller.GetQuestions)




export default router;