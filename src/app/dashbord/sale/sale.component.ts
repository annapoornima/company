import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { uniqueKey } from 'highcharts';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.css']
})
export class SaleComponent implements OnInit {
  chart: any;
  chartoption: any;
  newdata: any = [];
  data: any;
  studentdata: any = [];
  constructor() { }

  ngOnInit() {

    this.empchart();
    this.newdata = [
      {
        "title": 'student',
        "value": 2
      },
      {
        "title": 'student',
        "value": 4
      },
      {
        "title": 'student',
        "value": 6
      },
      {
        "title": 'student',
        "value": 7
      },
      {
        "title": 'employee',
        "value": 8
      },
      {
        "title": 'employee',
        "value": 6
      },
      {
        "title": 'employee',
        "value": 2
      },
      {
        "title": 'employee',
        "value": 10
      }
    ]
    var uniquearr = [...new Set(this.newdata.map(data => data.title))]
    this.data = uniquearr;
    console.log(this.data);
  }

  onEditClick(item: any) {
    console.log('skill name', item)
    this.studentdata = [];
    for (var i = 0; i < this.newdata.length; i++) {
      // console.log(this.newdata[i]);
      if (this.newdata[i].title == item) {
        console.log(this.newdata[i].value);
        this.studentdata.push(this.newdata[i].value);

        console.log(this.studentdata);

      }
    }
    this.empchart();
  }

    empchart(){
      this.chartoption = {
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
            name: 'studentdata',
            data: this.studentdata
          },
        ]
      }
      this.chart = new Chart(this.chartoption);
    }
  
}