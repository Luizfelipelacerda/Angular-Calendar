import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-months',
  templateUrl: './months.component.html',
  styleUrls: ['../../../node_modules/bootstrap/dist/css/bootstrap.min.css']
})
export class MonthsComponent implements OnInit {

  months: string[] = [
    "Janeiro","Fevereiro","Maio","Abril","Março","Junho",
    "Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"
  ];

  constructor() { }


  ngOnInit(): void {
  }

}
