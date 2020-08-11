import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { Match } from '../shared/match';
import { MatchService } from '../services/match.service';

import { Router, Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { switchMap } from 'rxjs/operators';
import { visibility, flyInOut, expand } from '../animations/app.animation';

@Component({
  selector: 'app-matchdetails',
  templateUrl: './matchdetails.component.html',
  styleUrls: ['./matchdetails.component.scss'],
  // tslint:disable-next-line:use-host-property-decorator
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
export class MatchdetailsComponent implements OnInit {

  match: Match;
  errMess: string;
  li:boolean;
  matchIds: string[];

  visibility = 'shown';

  constructor(private matchservice: MatchService,
    private route: ActivatedRoute,
    private location: Location,
    @Inject('BaseURL') private BaseURL) { }

  ngOnInit() {
    this.matchservice.getMatchIds().
      subscribe(matchIds => this.matchIds = matchIds);
    this.route.params
      .pipe(switchMap((params: Params) => { this.visibility = 'hidden'; return this.matchservice.getMatch(params['id']);}))
      .subscribe(match => { this.match = match; this.li=this.match.live; this.visibility = 'shown'; },
        errmess => this.errMess = <any>errmess );
  }
  refresh(){
    this.ngOnInit();
  }
}
