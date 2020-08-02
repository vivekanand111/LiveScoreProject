import { Component, OnInit } from '@angular/core';
import { Match } from '../shared/match';
import { MatchService } from '../services/match.service';

@Component({
  selector: 'app-scorecard',
  templateUrl: './scorecard.component.html',
  styleUrls: ['./scorecard.component.scss']
})
export class ScorecardComponent implements OnInit {

  match: Match;

  constructor(private matchService: MatchService) { }

  ngOnInit() {
    this.match = this.matchService.getMatch(1);
  }

}
