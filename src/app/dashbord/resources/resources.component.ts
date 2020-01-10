import { Component, OnInit } from '@angular/core';
import { Chart} from 'angular-highcharts';
@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent implements OnInit {

 
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
      xAxis: {
        title: {
           text: 'columnchart'
        },
        
        gridLineWidth: 0,
        visible: false
        
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
          data: [100, 200, 300]
        },
        {
          name: 'line 2',
         data:  [150, 200, 250, ]
         },
         {
           name: 'line 3',
          data:  [110, 210, 260, ]
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
          data: [40, 20, 30, 50, 10, 5]
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
       yAxis: {
        title: {
           text: 'columnchart'
        },
        
        gridLineWidth: 0,
        visible: false
        
     },
       title: {
         text: 'barchart'
       },
       credits: {
         enabled: false
       },
       seriesA: [
         {
           name: 'Line 1',
           data: [150, 250, 300]
         },{
         name: 'line 2',
        data: [100, 200, 250, ]
        },
        {
          name: 'line 3',
         data:  [110, 210, 260, ]
         }
       
       ]
 
  
     }
     this.chartbaroptions = new Chart(this.chartoption);
   }
}
