import { Router } from "express";
const router = Router();


/** Import Controllers */

import * as Controller from '../Controllers/Controller.js'

/** Questions Routes API*/

// router.get("/questions", Controller.GetQuestions)
// router.post("/questions", Controller.InsertQuestions)

/** Because we have the same endpoint ("/questions") */
router.route("/questions")
    .get(Controller.GetQuestions) /** GET Request */
    .post(Controller.InsertQuestions) /** POST Request */
    .delete(Controller.DropQuestions) /** DELETE Request */

router.route("/result")
    .get(Controller.GetResult)


export default router;