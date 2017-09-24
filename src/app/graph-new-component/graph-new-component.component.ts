import { Component, OnInit,Input } from '@angular/core';
import { ChartsModule } from 'ng2-charts';

@Component({
  selector: 'app-graph-new-component',
  templateUrl: './graph-new-component.component.html',
  styleUrls: ['./graph-new-component.component.css'],
  inputs:['data']
})
export class GraphNewComponentComponent implements OnInit {
@Input() data:any;
 //label of each arc
 public doughnutChartLabels:string[] = ['health score',''];
 //Value of arc  [health score,100-health score]
 public doughnutChartData:number[]=[]; 
 //setting the chart type to doughnut
 public doughnutChartType:string = 'doughnut';
 //setting the color of the arc
 public doughnutColors:Array<any> = [
  { 
    backgroundColor: ["#ff0000", "#A9A9A9"],
    
  }
]
// events
public chartClicked(e:any):void {
  
  console.log(this.doughnutChartData);
  console.log(e);
 }

 public chartHovered(e:any):void {
     console.log(e);
 }
  constructor() { }

  ngOnInit() { let timeoutId = setTimeout(() => {  
    this.sleep(100);
    console.log('value is '+this.data);
  }, 1000);
       
     
  }
   sleep(miliseconds):void {
   var currentTime = new Date().getTime();

   while (currentTime + miliseconds >= new Date().getTime()) {
   }
   console.log("I am leaving");
   
  
  this.doughnutChartData[0]=this.data;
  this.doughnutChartData[1]=100-this.data;
  console.log(this.doughnutChartData);
  console.log(this.doughnutChartLabels);
  
}

}
