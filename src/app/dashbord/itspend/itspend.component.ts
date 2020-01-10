import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { Chart} from 'angular-highcharts';

@Component({
  selector: 'app-itspend',
  templateUrl: './itspend.component.html',
  styleUrls: ['./itspend.component.css']
})
export class ItspendComponent implements OnInit {
chart:any;
chartoption : any;
  constructor() { }

  ngOnInit() {
    this.loadchart();
  }

  loadchart(){
    this.chartoption={
      chart: {
        type: 'line'
      },
      title: {
        text: 'Linechart'
      },
      credits: {
        enabled: false
      },
      series: [
        {
          name: 'Line 1',
          data: [1, 2, 3]
        }
      ]

    }
    this.chart = new Chart(this.chartoption);
  }

 
}
