import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class ChartDataService {

  constructor(private http:Http) { }
  public value:any;
  fetchData() {
     return this.http.get('http://ec2-52-40-123-167.us-west-2.compute.amazonaws.com:8080/qb-services/v0.1/api/audits/1')
             .map((res)=>res.json());
               
  }
  
}