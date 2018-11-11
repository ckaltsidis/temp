import { Injectable } from '@angular/core';
import { Http  } from '@angular/http';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';





/*
  Generated class for the MydataProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class MydataProvider {

  constructor(public http: Http) {
    console.log('Hello MydataProvider Provider');
  }

  localbaseUrl:string = 'http://localhost/mycoach-app/public/api/';
  baseUrl:string = 'https://orfiki.mycoach.gr/mobile/';

   
  psygeia() {
    return this.http.get(this.baseUrl+'refrigerators').map(res => res.json());   
  }

  temperature(id) {
    return this.http.get(this.baseUrl+'refrigdetails/'+id).map(res => res.json());
  }

  lasttemp(id) {
    return this.http.get(this.baseUrl+'lasttemp/'+id).map(res => res.json());
  }


}
