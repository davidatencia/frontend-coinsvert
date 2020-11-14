import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, BaseChartDirective, Label } from 'ng2-charts';
import * as pluginAnnotations from 'chartjs-plugin-annotation';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

 public lineChartData: ChartDataSets[] = [
   { data: [65, 30, 80, 40, 86, 55, 70,32], label: 'Series A' },

 ];
 public lineChartLabels: Label[] = ['7', '14', '21', '28', '35', '42', '56'];
  
 public lineChartColors: Color[] = [
   { // grey
     backgroundColor: '#EFEDF3',
     borderColor: '#b899ba',
     pointBackgroundColor: 'rgba(148,159,177,1)',
     pointBorderColor: '#fff',
     pointHoverBackgroundColor: '#fff',
     pointHoverBorderColor: 'rgba(148,159,177,0.8)'
   },
    
 ];
 public lineChartLegend = true;
 public lineChartType: ChartType = 'line';
 public lineChartPlugins = [pluginAnnotations];

  @ViewChild(BaseChartDirective, { static: true }) chart: BaseChartDirective;
  constructor() { }

   ngOnInit() {
  
  }
 public randomize(): void {
   for (let i = 0; i < this.lineChartData.length; i++) {
     for (let j = 0; j < this.lineChartData[i].data.length; j++) {
       this.lineChartData[i].data[j] = this.generateNumber(i);
     }
   }
   this.chart.update();
 }

 private generateNumber(i: number): number {
   return Math.floor((Math.random() * (i < 2 ? 100 : 1000)) + 1);
 }

 // events
 public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
   console.log(event, active);
 }

 public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
   console.log(event, active);
 }

 public hideOne(): void {
   const isHidden = this.chart.isDatasetHidden(1);
   this.chart.hideDataset(1, !isHidden);
 }

 public pushOne(): void {
   this.lineChartData.forEach((x, i) => {
     const num = this.generateNumber(i);
     const data: number[] = x.data as number[];
     data.push(num);
   });
   this.lineChartLabels.push(`Label ${this.lineChartLabels.length}`);
 }

 public changeColor(): void {
   this.lineChartColors[2].borderColor = 'green';
   this.lineChartColors[2].backgroundColor = `rgba(0, 255, 0, 0.3)`;
 }

 public changeLabel(): void {
   this.lineChartLabels[2] = ['1st Line', '2nd Line'];
 }
}