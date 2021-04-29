import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})
export class InfoPage implements OnInit {

  public company = {
    Phone : '',
    dialcode: '+91',
    businessname : '',
    name : '',
    Email : '',
    phone : '',
  
    latitude : '',
    longitude : '',
    address : '',
   }
   companydata : any;
   companyinfodata=[];
  constructor( private api : ApiService,
                private firestore : FirestoreService) { }

  ngOnInit() {
    this.companyInfo()
  }

  companyInfo(){
    this.company.businessname =this.api.businessname
    this.company.name = this.api.name
    this.company.Email = this.api.Email
    const companydetails={
      id : '+919092085728',
      BusinessName : this.company.businessname,
      Name : this.company.name,
      Email : this.company.Email 
    }
    this.firestore.getdataregister('users', companydetails).subscribe(use => {
      this.companydata= use;
      console.log('companyInfo', this.companydata)
      for(let i of this.companydata){
        this.companyinfodata.push(i)
        console.log("com",this.companyinfodata)
      }
    })
  }
}
