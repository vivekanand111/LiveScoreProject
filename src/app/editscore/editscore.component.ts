import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';


import { score } from '../shared/score';
import { Match } from '../shared/match';
import { from } from 'rxjs';

@Component({
  selector: 'app-editscore',
  templateUrl: './editscore.component.html',
  styleUrls: ['./editscore.component.scss']
})
export class EditscoreComponent implements OnInit {
  matchForm1: FormGroup;
  matchForm2: FormGroup;
  team1: score;
  team2: score;

  constructor(private fb: FormBuilder,
    private router: Router) { 
    this.createForm();
  }

  ngOnInit() {
  }
  createForm() {
    this.matchForm1= this.fb.group({
        overs:0,
        runs:0,
        wickets:0
    });
    this.matchForm2= this.fb.group({
      overs:0,
      runs:0,
      wickets:0
  });
  }

  onSubmit1() {
    this.team1 = this.matchForm1.value;
    //this.cmatch.match.ascore= this.team1;
    console.log(this.team1);
  }
  onSubmit2() {
    this.team2 = this.matchForm2.value;
    //this.match.bscore = this.team2;
    console.log(this.team2);
  }
  end() : void {
    this.router.navigate(['/finishmatch']);
  }
}
