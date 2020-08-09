import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatchService } from '../services/match.service';
import { Match, MatchType, BattingTeam, Winner  } from '../shared/match';
import { visibility, flyInOut, expand } from '../animations/app.animation';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-creatematch',
  templateUrl: './creatematch.component.html',
  styleUrls: ['./creatematch.component.scss'],
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
export class CreatematchComponent implements OnInit {

  matchForm: FormGroup;
  errMess: string;
  match: Match;
  matchType = MatchType;
  battingteam = BattingTeam;
  @ViewChild('fform') matchFormDirective;
  visibility = 'shown';
  submitted = null;
  showForm = true;

  formErrors = {
    'teama': '',
    'teamb': '',
    'location':'',
    'status':''
  };

  validationMessages = {
    'teama': {
      'required':      'Team Name is required.'
    },
    'teamb': {
      'required':      'Team Name is required.'
    },
    'location': {
      'required':      'Location is required.'
    }
  };

  constructor(private matchservice: MatchService,
    private fb: FormBuilder,
    private route:ActivatedRoute
    ) {
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.matchForm = this.fb.group({
      teama:['', Validators.required],
      imagea:'',
      teamb:['', Validators.required],
      imageb:'',
      date:'',
      location:['', Validators.required],
      winner:'None',
      live:true,
      matchType:'',
      battingteam:'',
      status:['', Validators.required],
      aruns:0,
      aovers:0,
      awickets:0,
      bruns:0,
      bovers:0,
      bwickets:0,
      adata:[],
      bdata:[]
    });

    this.matchForm.valueChanges
      .subscribe(data => this.onValueChanged(data));

    this.onValueChanged();
  }
    
  onValueChanged(data?: any) {
    if (!this.matchForm) { return; }
    const form = this.matchForm;
    for (const field in this.formErrors) {
      if (this.formErrors.hasOwnProperty(field)) {
        // clear previous error message (if any)
        this.formErrors[field] = '';
        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[field];
          for (const key in control.errors) {
            if (control.errors.hasOwnProperty(key)) {
              this.formErrors[field] += messages[key] + ' ';
            }
          }
        }
      }
    }
  }

  onSubmit() {
    this.match = this.matchForm.value;
    this.match.date = new Date().toISOString();
    this.match.imagea="images/"+this.matchForm.value.teama+".png";
    this.match.imageb="images/"+this.matchForm.value.teamb+".png";
    this.showForm = false;
    this.matchservice.postMatch(this.match)
      .subscribe(match => {
        this.submitted = match;
        //setTimeout(() => { this.submitted = null; this.showForm = true; }, 5000);
      },
      errmess => { this.match = null; this.errMess = <any>errmess; });
    console.log(this.match);
  }
}
