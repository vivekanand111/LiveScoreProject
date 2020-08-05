import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { AdminloginComponent } from '../adminlogin/adminlogin.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public dialog: MatDialog,
    @Inject('BaseURL') private BaseURL ) { }

  ngOnInit() {
  }

  openLoginForm() {
    this.dialog.open(AdminloginComponent, {width: '500px', height: '450px'});
  }
}

