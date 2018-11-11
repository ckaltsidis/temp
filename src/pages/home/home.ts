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
  constructor(public navCtrl: NavController, public navParams: NavParams, public mydata: MydataProvider) {
   
    this.mydata.psygeia().subscribe(data => {
      this.data = data;
  });
    
 }

 onLoadRefrig(item) {
  console.log(item);
    this.navCtrl.push(DetailPage, {
      id: item.id,
      name: item.name
    });

    

 }

}
