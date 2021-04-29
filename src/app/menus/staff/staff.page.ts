import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router'
import { ApiService } from 'src/app/services/api.service';
import { FirestoreService } from 'src/app/services/firestore.service';


@Component({
  selector: 'app-staff',
  templateUrl: './staff.page.html',
  styleUrls: ['./staff.page.scss'],
})
export class StaffPage implements OnInit {

  // public service ={
  //   ServiceName : '',
    
  // }

  
  public staff ={
    staffname: '',
    worktime : '',
    phone : '',
    service : '',
    ServiceName : '',
    service1 : '',

  }

  service1data : any;
  service1list= [];
  servicevalues = [];
  staffdata : any;
  staffmember=[];
  constructor(private ngAuth : AngularFireAuth,
              private router : Router,
              private firestore : FirestoreService,
              private api : ApiService) { }

  ngOnInit() {
    this.servicedetails()
    this.service1details()
  }

back(){
  this.router.navigate(['/home'])
}
getStaffDetails(){

  const staffInfo = {
    id : '+919092085728', 
    staffName : this.staff.staffname,
    worktime : this.staff.worktime,
    phone :this.staff.phone,
    service : this.staff.service
    //serviceothers: this.service.ServiceName
    
  } 
 console.log('result',this.staff)
  this.firestore.updateField('users','staff',staffInfo.id,staffInfo).then((response)=>{
    console.log('response',response)
  })
  .catch((error)=>{
    console.log('error',error)
  })
  // this.firestore.getdata('users',staffInfo.id,'staff',staffInfo).subscribe(res=>{
  //   this.staffdata = res
  //   console.log('staffdetails',this.staffdata)
  //   for(let i of this.staffdata){
  //      console.log("result",i)
  //     this.staffmember.push(i)
  // }
  // })
  
}
// elmentchange(ev : any,value){
//     console.log(ev,value)
// }
// checkElement(value){
   
// }

servicedetails(){
  this.staff.ServiceName = this.api.ServiceName
  //service
  const serviceInfo ={
    id : '+919092085728',
    ServiceName : this.staff.ServiceName

  }
  
  //service
  this.firestore.getdata('users',serviceInfo.id,'service',serviceInfo).subscribe(use=>{
    this.staffdata = use
    console.log('staffdetails',this.staffdata)
    for(let i of this.staffdata){
      console.log("result",i)
     this.staffmember.push(i)
    }
  })


}
  
service1details(){
 this.staff.service1 = this.api.service1
 const service1Info = {
  id : '+919092085728',
  service1 : this.staff.service1
 }
 this.firestore.getdata('users',service1Info.id,'defaultServices',service1Info).subscribe(use=>{
   this.service1data=use;
   console.log("result",use)
   for(let i of this.service1data){
     this.service1list.push(i)
   }
 })
}
}
