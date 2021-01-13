import {HttpClient} from '@angular/common/http';
import {Injectable} from "@angular/core";

@Injectable({
    providedIn:'root'
})
export class TriviaService {

    public score: number = 0;

    constructor(private http : HttpClient){    
    }
    GetAllQuestions(){
        return this.http.get<IQuestion[]>("http://localhost:3000/questions");
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
