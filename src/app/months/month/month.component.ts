import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-month',
  templateUrl: './month.component.html',
  styleUrls: ['../../../../node_modules/bootstrap/dist/css/bootstrap.min.css']
})
export class MonthComponent implements OnInit {
  @Input() month: string = "";
  constructor() { }

  ngOnInit(): void {
  }

}
