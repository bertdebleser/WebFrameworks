import { Component, OnInit } from '@angular/core';
import{ IQuestion, IScore, TriviaService} from '../Services/trivia.service'; //importeren van Iquestions
import * as _ from 'lodash'
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  scores: IScore[] = [];
  constructor(public svc: TriviaService) { } //injecteren van service ! Anders kan je geen data opvragen uit de interface

  ngOnInit() {
  }
  get Score()
  {
    return this.svc.score;
  }
  Save(name: string)
  {
       this.svc.SaveScore(name, this.svc.score).subscribe(result => { //erst een save dan een subscribe dan wordt de post uitgevoerd naar de server 
       this.svc.GetAllScore().subscribe(scores => this.scores = scores);
    });
  }
}