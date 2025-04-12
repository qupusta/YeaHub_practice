import DOMPurify from "dompurify";
import { IQuestion } from "../model/types/question";

export const prepareQuestionDataForUI = (question: IQuestion) => ({
  ...question,
  shortAnswer: DOMPurify.sanitize(question.shortAnswer),
  longAnswer: DOMPurify.sanitize(question.longAnswer)
})