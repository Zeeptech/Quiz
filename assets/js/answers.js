import questions from "./question.js";
import Quiz from "./quiz.js";
const answers = {

};

questions.forEach((_, index) => {
        answers[index] = null
});
console.log(answers);

function collectAnswer(questionIndex,optionIndex){
    answers[questionIndex] = optionIndex;
    console.log(answers);
    Quiz.updatePage();
};

export default {answers, collectAnswer};