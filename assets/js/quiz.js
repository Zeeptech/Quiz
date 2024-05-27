import questions from "./question.js";
 class Quiz {
    
    static quizBoxElement;
    static optionBoxElement;
    static nextPageButtonElement;
    static prevButtonElement;
    static confirmButtonElement;
    static quizBoxIndex = 0;
    

    static init(){
        this.bindElements();
        this.bindEventListener();
    }
    static bindElements(){
        this.quizBoxElement = document.getElementById("quizBox");
        this.optionBoxElement = document.getElementById("optionBox");
        this.nextPageButtonElement = document.getElementById("nextButton");
        this.prevButtonElement = document.getElementById("prevButton");
        this.confirmButtonElement = document.getElementById("confButton");
    }
    static bindEventListener(){
        this.nextPageButtonElement.addEventListener("click",this.nextPage.bind(this));
        this.prevButtonElement.addEventListener("click",this.prevPage.bind(this));
        this.confirmButtonElement.addEventListener("click",this.confirmPage.bind(this));
    }
    
     static updatePage(){
        this.quizBoxElement.innerHTML = questions[this.quizBoxIndex].prompt;
        this.optionBoxElement.innerHTML= "";
        questions[this.quizBoxIndex].options.forEach(element => {
            this.optionBoxElement.innerHTML+= element.title
        });
        this.updateNavButtons();
    }
    static nextPage(){

     if(this.quizBoxIndex < questions.length - 1){
            this.quizBoxIndex++;
            this.updatePage();
        };
    }

    static prevPage(){
        if(this.quizBoxIndex > 0){
            this.quizBoxIndex--;
            this.updatePage();
        };

    }
    static confirmPage(){
        alert("Congrats, ur retarded");
    }
    static updateNavButtons(){
        if(this.quizBoxIndex < questions.length - 1){
            this.nextPageButtonElement.removeAttribute("disabled",true);
            this.confirmButtonElement.setAttribute("disabled",true);
        }
        else{
            this.nextPageButtonElement.setAttribute("disabled",true);
            this.confirmButtonElement.removeAttribute("disabled",true);
        }
        if(this.quizBoxIndex > 0){
            this.prevButtonElement.removeAttribute("disabled",true);
        }
        else{
            this.prevButtonElement.setAttribute("disabled",true);
        }
    };
    
};
Quiz.init();
Quiz.updatePage();

