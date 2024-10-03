
import mongoose from "mongoose";
const { Schema } = mongoose;

/** Question model */

const QuestionModel = new Schema({
  questions : { type : Array, default: []},
  answers : { type : Array, default: []},
  createdAt: { type : Date, default: Date.now}
});

export default mongoose.model('Question', QuestionModel)