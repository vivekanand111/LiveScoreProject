import { Component, OnInit } from '@angular/core';
import { MATCHES } from '../shared/matches'
import { MatchService } from '../services/match.service';
import { Match } from '../shared/match';
import { Router } from '@angular/router';
@Component({
  selector: 'app-prevmatches',
  templateUrl: './prevmatches.component.html',
  styleUrls: ['./prevmatches.component.scss']
})
export class PrevmatchesComponent implements OnInit {

  matches = MATCHES;
  match: Match;

  constructor(private matchService: MatchService,
    private router:Router) { }

  ngOnInit() {
      this.match = this.matchService.getLiveMatch();
  }
  gotoScore(): void {
    this.router.navigate(['/scorecard']);
  }
}
