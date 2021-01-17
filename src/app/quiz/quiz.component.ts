import { Component, OnInit } from '@angular/core';
import{ IQuestion, TriviaService} from '../Services/trivia.service'; //importeren van Iquestions
import * as _ from 'lodash'
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  questions : IQuestion[]; //array van questions declareren
  current : number = 0; // we geven hier 0 mee omdat 
  currentQuestion: IQuestion;
  answers : string[]; //array van antwoorden
  answer : string;
  event : any;
  wrongAnswer : boolean = false;
  interval;
  time : number = 5000;
  router;
  endQuiz : boolean = false;
  // possibleAnswers: string[];

  constructor(public svc: TriviaService) { } //injecteren van service ! Anders kan je geen data opvragen uit de interface

  ngOnInit() {
    this.svc.GetAllQuestions().subscribe(result => { 
      this.questions = result;
      this.SetNextQuesion();
      });  
  }

  SetNextQuesion = () => { // dubbele pijl notatie je kan alle methodes met dubbele pijl notatie doen maken. maar zeker als je set timeout of setinterval gebruikt
    this.current++;
    this.currentQuestion = this.questions[this.current-1]; // current is een number dat op 0 staat en zal zo de eerste vraag uit de array worden genomen
    let rnd = _.random(0, this.currentQuestion.incorrect_answers.length-1)                 
    this.answers = this.currentQuestion.incorrect_answers;
    this.answers.splice(rnd,0,this.currentQuestion.correct_answer);
  }

  ChooseAnswer(answer) 
  {
    if (answer.target.value == this.currentQuestion.correct_answer)
    {
      this.SetNextQuesion();
      this.increaseScore();
    }
    else
    {
      this.wrongAnswer = true;
      setTimeout(this.SetNextQuesion, 5000); //hier roepen we SetNextQuestion op na 5seconden. Zorg dat de functie dat je oproept van een dubbele pijl notatie voorzien is! 
      console.log("deze vraag is fout")
    }
  }
  
  increaseScore() {
    this.svc.SetScore(this.svc.score);
    }

  public get Score() {
    return this.svc.GetAllScore();
  }
  public overzichtspagina(){
    this.router.navigate(['overzichtspagina']);
  }
}