import { Component, OnInit } from '@angular/core';
import { Chart} from 'angular-highcharts';
@Component({
  selector: 'app-procurement',
  templateUrl: './procurement.component.html',
  styleUrls: ['./procurement.component.css']
})
export class ProcurementComponent implements OnInit {
  chart:any;
  chartoption : any;
chartpieoptions:any;
chartbaroptions:any;
  constructor() { }

  ngOnInit() {
        this.loadchart();
        this.chartpie();
        this.chartbar();
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
    this.chart= new Chart(this.chartoption);
  }
  chartpie(){
    this.chartoption={
     chart: {
        type: 'pie'
      },
      title: {
        text: 'piechart'
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
    this.chartpieoptions = new Chart(this.chartoption);
  }
  chartbar(){

    this.chartoption={
      chart: {
         type: 'bar'
       },
       title: {
         text: 'barchart'
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
     this.chartbaroptions = new Chart(this.chartoption);
   }

  

 
}
