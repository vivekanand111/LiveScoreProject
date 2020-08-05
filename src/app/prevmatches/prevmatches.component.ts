import { Component, OnInit, Inject } from '@angular/core';

import { MatchService } from '../services/match.service';
import { Match } from '../shared/match';
import { flyInOut, expand } from '../animations/app.animation';

@Component({
  selector: 'app-prevmatches',
  templateUrl: './prevmatches.component.html',
  styleUrls: ['./prevmatches.component.scss'],
  // tslint:disable-next-line:use-host-property-decorator
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
  },
  animations: [
    flyInOut(),
    expand()
  ]
})
export class PrevmatchesComponent implements OnInit {

  matches: Match[];
  errMess: string;

  selectedMatch: Match;

  constructor(private matchService: MatchService,
    @Inject('BaseURL') private BaseURL) { }
  
  ngOnInit() {
    this.matchService.getMatches()
      .subscribe(matches => this.matches = matches,
        errmess => this.errMess = <any>errmess);    
  }
  onSelect(match: Match) {
    this.selectedMatch = match;
  }
}
