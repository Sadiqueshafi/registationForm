import { Component, OnInit } from '@angular/core';
import {Chart} from 'node_modules/chart.js';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  name = ['Sadique', 'Shafi', 'Reha Scrallel', 'Dany Waston', 'James Schoot'];
  applidefor = ['angular', 'backend', 'nodejs', 'java', 'python', 'ios' ];
  xValues = ['Italy', 'France', 'Spain', 'USA', 'Argentina'];
  yValues = [55, 49, 44, 24, 15];
  barColors = ['#b91d47', '#00aba9', '#2b5797',  '#e8c3b9',  '#1e7145' ];
  constructor( ) { }

  ngOnInit(): void {
    const a = document.getElementById('myChart') as HTMLCanvasElement;
    const myChart = new Chart( a , {
      type: 'bar',
      data: {
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [{
              label: '# of Votes',
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
  });

}
}
