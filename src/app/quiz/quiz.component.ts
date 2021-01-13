import { Component, OnInit } from '@angular/core';
import{ IQuestion, TriviaService} from '../Services/trivia.service'; //importeren van Iquestions
import * as _ from 'lodash'

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
  // wrongAnswer : boolean = false;
  // lastQuestion : boolean = false;
  // possibleAnswers: string[];


  constructor(private svc: TriviaService) { } //injecteren van service ! Anders kan je geen data opvragen uit de interface

  ngOnInit() {
    this.svc.GetAllQuestions().subscribe(result => { 
      this.questions = result;
      this.SetNextQuesion();
      });  
  }

  SetNextQuesion = () => {
    this.current++;
    this.currentQuestion = this.questions[this.current-1]; // current is een number dat op 0 staat en zal zo de eerste vraag uit de array worden genomen
    let rnd = _.random(0, this.currentQuestion.incorrect_answers.length-1)                 
    this.answers = this.currentQuestion.incorrect_answers;
    this.answers.splice(rnd,0,this.currentQuestion.correct_answer);
    
  }

  ChooseAnswer(answer : string) 
  {
    console.log(answer);
    
    if (answer == this.currentQuestion.correct_answer)
    {      
      this.svc.score++;
      this.SetNextQuesion();
    }
    else
    {

    }
  }
  
  public get Score()  {
    return this.svc.score; //
  }
  
  
  // GetPossibleAnswers(){
  //   let possibleAnswers: string[] = new Array();
  //   possibleAnswers.push(" ");
  //   let isSet : boolean = false;
    
  //   let rnd = Math.floor(Math.random() * this.questions.length);
  //   for (let x:number = 0; x < this.questions[this.questions.length].incorrect_answers.length; x++);
  //   {
  //     if(x == rnd && isSet)
  //   }
  // }
  
}