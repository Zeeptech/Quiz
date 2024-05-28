const answers = [
    
];

function collectAnswer(questionIndex,optionIndex){
    answers.push({
        questionIndex,
        optionIndex
    })
    console.log(answers);
};

export default {answers, collectAnswer};