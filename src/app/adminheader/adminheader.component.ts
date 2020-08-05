import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-adminheader',
  templateUrl: './adminheader.component.html',
  styleUrls: ['./adminheader.component.scss']
})
export class AdminheaderComponent implements OnInit {

  constructor(@Inject('BaseURL') private BaseURL) { }

  ngOnInit() {
  }

}
