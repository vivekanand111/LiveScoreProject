import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { Match } from '../shared/match';
@Component({
  selector: 'app-creatematch',
  templateUrl: './creatematch.component.html',
  styleUrls: ['./creatematch.component.scss']
})
export class CreatematchComponent implements OnInit {

  matchForm: FormGroup;
  match: Match;

  constructor(private fb: FormBuilder,
    private router: Router) {
    this.createForm();
  }

  ngOnInit() {
  }
  createForm() {
    this.matchForm = this.fb.group({
      id: 0,
      teama:'',
      imagea:'',
      teamb:'',
      imageb:'',
      date:'',
      location:'',
      winner:'',
      live:true,
      status:'',
      ascore:{
        overs:0,
        runs:0,
        wickets:0,
      },
      bscore:{
        overs:0,
        runs:0,
        wickets:0,
      }
    });
  }

  onSubmit() {
    this.match = this.matchForm.value;
    console.log(this.match);
    this.router.navigate(['/editscore']);
  }
}
