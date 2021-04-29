import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import {FirestoreService} from 'src/app/services/firestore.service';

@Component({
  selector: 'app-opening',
  templateUrl: './opening.page.html',
  styleUrls: ['./opening.page.scss'],
})
export class OpeningPage implements OnInit {

  public open = {
    Monday : 'am' + 'pm',
    am :'',
    pm :'',
    tusday : 'am1' + 'pm1', 
    am1 : '',
    pm1 : '',
    wednesday : 'am2' + 'pm2', 
    am2 : '',
    pm2 :'',
    thursday : 'am3' + 'pm3',
    am3 :'',
    pm3 :'',
    friday :'am4' + 'pm4',
    am4:'',
    pm4 :'',
    saturday : 'am5' + 'pm5',
    am5 :'',
    pm5 :'',
    sunday : 'am6' + 'pm6',
    am6 :'',
    pm6 :'',
  }

  public time ={
   // Monday : '', 
   // tusday : '',
  }
  constructor(private router : Router,
              private firestore : FirestoreService) { }

  ngOnInit() {
  }

  getOpenningDetails(){
    // this.time.Monday=this.time.Monday
    // this.time.tusday=this.time.tusday 
    const openingInfo = {
      id : '+919092085728',
      Monday : this.open.am+ ' ' +'to'+ ' ' + this.open.pm,
      tusday : this.open.am1+ ' ' +'to'+ ' ' + this.open.pm1,
      wednesday : this.open.am2+ ' ' +'to'+ ' ' + this.open.pm2,
      thursday : this.open.am3+ ' ' +'to'+ ' ' + this.open.pm3,
      friday : this.open.am4+ ' ' +'to'+ ' ' + this.open.pm4,
      saturday : this.open.am5+ ' ' +'to'+ ' ' + this.open.pm5,
      sunday : this.open.am6+ ' ' +'to'+ ' ' + this.open.pm6,
    }
    this.firestore.update('users', openingInfo.id, openingInfo).then(res =>{

    });
    console.log("openning hours", this.open)
  }
 
  back(){
    this.router.navigate(['/home'])
  }
}
