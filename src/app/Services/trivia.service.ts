import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";


@Injectable({
    providedIn:'root'
})
export class TriviaService {
    public score : number = 0;
    public constructor(private http : HttpClient){    
    }
    GetAllQuestions(){
        return this.http.get<IQuestion[]>("http://localhost:3000/questions");
    }  
    SetScore(score){
        this.score++;

    }
    GetAllScore(){
        return this.http.get<IScore[]>("http://localhost:8000/api/Trivia")
    }
    SaveScore(name : string, score : number){
        let obj : IScore = {
            score : score,
            name : name,
            date : new Date()
        }
        return this.http.post<IScore>("http://localhost:8000/api/Trivia",obj); 
    }

}
export interface IQuestion{
    category: string;
    type: string;
    difficulty: string;
    question: string;
    correct_answer: string;
    incorrect_answers: string[];

    
}
export interface IScore{
    score : number;
    name : string;
    date : Date
}