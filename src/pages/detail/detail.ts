import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MydataProvider } from '../../providers/mydata/mydata';
import { Chart } from 'chart.js';

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {

  @ViewChild('lineCanvas') lineCanvas;

  lineChart: any;

  data:string;
  myid:string;
  myname:string;
  lasttemp:string;
  ltemp: string;
  ldate: string;
  labels: any = [];
  cdata: any = [];
  x:any;
  y:any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private mydata: MydataProvider) {
  
    this.myid = this.navParams.get('id');
    this.myname = this.navParams.get('name');
    
    this.mydata.temperature(this.myid).subscribe(data => {
          this.data = data;
         
          for(var i = 0; i < data.length; i++){
            //console.log(this.data[i].temp_value);
            //this.labels[i]  = this.data[i].temp_date;
            
            // this.x = this.data[i].temp_date.split(' ');
            // this.labels[i]  = this.x[1];
            // this.cdata[i] = this.data[i].temp_value;
            // console.log(this.data[i].temp_date);

            this.x = data[i].temp_date.split(' ');
            this.labels[i]  = this.x[1];
            this.cdata[i] = data[i].temp_value;
            // console.log(this.data[i].temp_date);
            
          } 
          
          this.lineChart = new Chart(this.lineCanvas.nativeElement, {
 
            type: 'line',
            data: {
              labels: this.labels,
                datasets: [
                    {
                        label: "Θερμοκρασία",
                        fill: false,
                        lineTension: 0.1,
                        backgroundColor: "rgba(75,192,192,0.4)",
                        borderColor: "rgba(75,192,192,1)",
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: "rgba(75,192,192,1)",
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: "rgba(75,192,192,1)",
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: this.cdata,
                        spanGaps: false,
                    }
                ]
            }
      
          });
    });

    this.mydata.lasttemp(this.myid).subscribe(data => {
      this.lasttemp = data;
      this.ltemp = data.temp_value;
      this.ldate = data.temp_date;
      
      // console.log(this.lasttemp);
      //this.labels = ["January", "February", "March", "April", "May", "June", "July"];

      // for(let i = 0; i <= this.Data.length; i++){
      //   this.labels  = this.Data.name
      //   this.cdata= this.Data.age 
      // } 
    });

    


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
   
    
  }

}
