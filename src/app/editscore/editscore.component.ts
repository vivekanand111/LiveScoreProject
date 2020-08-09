import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatchService } from '../services/match.service';
import { Match, MatchType, BattingTeam, Winner  } from '../shared/match';

import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { switchMap } from 'rxjs/operators';
import { visibility, flyInOut, expand } from '../animations/app.animation';

@Component({
  selector: 'app-editscore',
  templateUrl: './editscore.component.html',
  styleUrls: ['./editscore.component.scss'],
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
export class EditscoreComponent implements OnInit {

  battingteam = BattingTeam;
  winner = Winner;
  errMess: String;
  match: Match;
  matchIds: string[];
  matchForm1: FormGroup;
  matchForm2: FormGroup;
  matchForm3: FormGroup;
  matchcopy: Match;  
  visibility = 'shown';

  formErrors = {
    'runs': '',
    'overs': '',
    'wickets': ''
  };

  validationMessages = {
    'runs': {
      'required':      'runs is required.'
    },
    'overs': {
      'required':      'overs is required.'
    },
    'wickets': {
      'required':      'wickets is required.'
    }
  };

  constructor(private matchservice: MatchService,
    private router: Router,
    private route: ActivatedRoute,
    private locationl : Location,
    private fb: FormBuilder,
    @Inject('BaseURL') private BaseURL) { 
  }


  ngOnInit() {
    this.createForm();

    this.matchservice.getMatchIds().subscribe(matchIds => this.matchIds = matchIds);
    this.route.params.pipe(
      switchMap((params: Params) => { 
      this.visibility = 'hidden'; 
      return this.matchservice.getMatch(params['id']); }))
    .subscribe(match => {
      this.match = match;
      this.matchcopy = match;
      this.matchcopy.adata=[];
      this.matchcopy.bdata=[];
      console.log(this.matchcopy)
      this.visibility = 'shown';
    },
    errmess => this.errMess = <any>errmess);

  }
  createForm() {
    this.matchForm1 = this.fb.group({
      aovers: ['', [Validators.required ]],
      aruns : ['',[Validators.required ]],
      awickets : ['', [Validators.required] ]      
    });
    this.matchForm2 = this.fb.group({
      bovers: ['', [Validators.required ]],
      bruns : ['',[Validators.required ]],
      bwickets : ['', [Validators.required] ]      
    });
    this.matchForm3 = this.fb.group({
      winner:'None',
      battingteam:'',
      status:''
    });
  }

  onSubmit1() {
    this.matchcopy.aovers=Number(this.matchForm1.value.aovers);
    this.matchcopy.aruns=Number(this.matchForm1.value.aruns);
    this.matchcopy.awickets=Number(this.matchForm1.value.awickets);
    if(this.matchcopy.aovers%5==0 && this.matchcopy.aovers<21){
      this.matchcopy.adata.push(this.matchcopy.aruns);
    }
    this.matchservice.putMacth(this.matchcopy)
      .subscribe(match => {
        this.match = match; this.matchcopy = match;
      },
      errmess => { this.match = null; this.matchcopy = null; this.errMess = <any>errmess; });
      alert("Sucessfully Updated Score");
  }

  onSubmit2() {
    this.matchcopy.bovers=Number(this.matchForm2.value.bovers);
    this.matchcopy.bruns=Number(this.matchForm2.value.bruns);
    this.matchcopy.bwickets=Number(this.matchForm2.value.bwickets);
    if(this.matchcopy.bovers%5==0 && this.matchcopy.aovers<21){
      this.matchcopy.bdata.push(this.matchcopy.bruns);
    }
    console.log(this.matchcopy);
    this.matchservice.putMacth(this.matchcopy)
      .subscribe(match => {
        this.match = match; this.matchcopy = match;
      },
      errmess => { this.match = null; this.matchcopy = null; this.errMess = <any>errmess; });
    alert("Sucessfully Updated Score");
  }
  updateStatus() {
    this.matchcopy.winner=this.matchForm3.value.winner;
    this.matchcopy.battingteam=this.matchForm3.value.battingteam;
    this.matchcopy.status=this.matchForm3.value.status;
    console.log(this.matchcopy);
    this.matchservice.putMacth(this.matchcopy)
      .subscribe(match => {
        this.match = match; this.matchcopy = match;
      },
      errmess => { this.match = null; this.matchcopy = null; this.errMess = <any>errmess; });
    alert("Sucessfully Updated Status");
  }
  end(){
    this.matchcopy.live=false;
    console.log(this.matchcopy);
    this.matchservice.putMacth(this.matchcopy)
      .subscribe(match => {
        this.match = match; this.matchcopy = match;
      },
      errmess => { this.match = null; this.matchcopy = null; this.errMess = <any>errmess; });
    alert("Sucessfully Finshed Match");
    this.router.navigate(['/admindashboard']);
  }
}
