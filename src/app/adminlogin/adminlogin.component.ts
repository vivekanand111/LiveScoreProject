import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.scss']
})
export class AdminloginComponent implements OnInit {

  username: string;
  password: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  login() : void {
    if(this.username == 'admin' && this.password == 'admin'){
      this.router.navigate(['/admindashboard']);
     //alert("Successfully logged!");
    }else {
      alert("Invalid credentials");
    }
  }
}