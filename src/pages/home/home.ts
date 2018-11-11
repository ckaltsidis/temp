import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MydataProvider } from '../../providers/mydata/mydata';
import { DetailPage } from '../../pages/detail/detail';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {  
  data:object;
  baseUrl:string = 'https://orfiki.mycoach.gr/mobile/';
  constructor(public navCtrl: NavController, public navParams: NavParams, public mydata: MydataProvider) {
   
    this.mydata.psygeia().subscribe(data => {
      this.data = data;
      console.log('Data:');
      console.log(data);
      console.log('post load 1');
  });

//this.data = this.http.get(this.baseUrl+'refrigerators').map(res => res);
//  this.http.get(this.baseUrl+'refrigerators')
//     .subscribe(
//     data => {
//       console.log('Data');
//       //this.data = data as any[];   // FILL THE ARRAY WITH DATA.
//       this.data = data;
//     },
//     error => {
//         console.log(error);
//     } );  
    
 }

 onLoadRefrig(item) {
  console.log(item);
    this.navCtrl.push(DetailPage, {
      id: item.id,
      name: item.name
    });

    

 }

}
