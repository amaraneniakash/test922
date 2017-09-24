import { Component } from '@angular/core';
import {ChartDataService} from './chart-data.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //Temporary values  
 
public chartValue:any;
constructor(private dataservice:ChartDataService){}
ngOnInit(){
  this.dataservice.fetchData().subscribe((data)=>(this.chartValue=(data["latestTrend"]["healthScore"])));
  
  let timeoutId = setTimeout(() => {  
    this.sleep(100);
    console.log('value is '+this.chartValue);
  }, 1000);
       
     
  }
   sleep(miliseconds):void {
   var currentTime = new Date().getTime();

   while (currentTime + miliseconds >= new Date().getTime()) {
   }
   console.log("I am leaving");
   
}
}
