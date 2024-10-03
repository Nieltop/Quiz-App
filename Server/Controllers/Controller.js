
import Questions from "../Models/QuestionSchema.js";
import Results from "../Models/ResultSchema.js";
import questions, { answers } from '../Database/Data.js'

/** Get all questions */

export async function GetQuestions(req, res) {
  try {
    const Q = await Questions.find();
    res.json(Q)
  } catch (error) {
    res.json({ error })
  }
}

/** Insert all questions */

export async function InsertQuestions(req, res) {
  try {
    Questions.insertMany({ questions, answers}, function (err, data){
      res.json({ msg: "Data Saved Successfully...!"})
    })
  } catch (error) {
    res.json({ error })
  }
}

/** Delete all questions */

export async function DropQuestions(req, res) {
  try {
    await Questions.deleteMany();
    res.json({ msg: "Questions Deleted Successfully...!"})
  } catch (error) {
    res.json({ error })
  }
}

/** Get all result */
export async function GetResult(req, res) {
  res.json("Result api get request")
}

/** Post all results */
export async function StoreResult(req, res) {
  res.json("Result api post request")
}

/** Delete all results */
export async function DropResult(req, res) {
  res.json("Result api delete request")
}