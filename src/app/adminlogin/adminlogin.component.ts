import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {MatDialog, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.scss']
})
export class AdminloginComponent implements OnInit {

  user = {username: '', password: '', remember: false};

  constructor(private router: Router,public dialogRef: MatDialogRef<AdminloginComponent>) { }

  ngOnInit() {
  }
  onSubmit() {
    console.log('User: ', this.user);
    if (this.user.username=="admin" && this.user.password=="admin"){
      this.router.navigate(['/admindashboard']);
    }else{
      alert("Invalid credentials");
    }
    this.dialogRef.close();
  }
}