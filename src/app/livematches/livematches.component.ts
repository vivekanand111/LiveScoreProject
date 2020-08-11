import { Component, OnInit, Inject} from '@angular/core';
import { Match } from '../shared/match';
import { MatchService } from '../services/match.service';
import { visibility, flyInOut, expand } from '../animations/app.animation';

@Component({
  selector: 'app-livematches',
  templateUrl: './livematches.component.html',
  styleUrls: ['./livematches.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
    },
    animations: [
      visibility(),
      flyInOut(),
      expand()
    ]
})
export class LivematchesComponent implements OnInit {

  matches: Match[];
  errMess: string;
  li:boolean;
  visibility = 'shown';
  selectedMatch: Match;

  constructor(private matchService: MatchService,
    @Inject('BaseURL') private BaseURL) { }
  
  ngOnInit() {
    this.visibility = 'hidden';
    this.matchService.getMatches()
      .subscribe(matches => { this.matches = matches; this.visibility = 'shown';
      this.li=false;
      for(let i=0;i<matches.length;i++){
        if(this.matches[i].live==true){
          this.li=true;
        }
      }
    },
        errmess => this.errMess = <any>errmess); 
  }
  onSelect(match: Match) {
    this.selectedMatch = match;
  }
  refresh(){
    this.ngOnInit();
  }
}
