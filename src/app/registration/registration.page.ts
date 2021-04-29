import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';
import { ApiService } from '../services/api.service';
import {FirestoreService} from '../services/firestore.service'


@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {

 public user = {
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





  constructor( private router : Router,
                private ngfire : AngularFireAuth,
                private api : ApiService,
                private firestore : FirestoreService) { }

  ngOnInit() {
  }

  register(){    
    this.user.latitude = this.api.latitude;
    this.user.longitude = this.api.longitude;
    this.user.address = this.api.address;
    //console.log(this.user);
    const client ={
      id:this.user.dialcode+9092085728,
      name : this.user.name,
      bussinessname : this.user.businessname,
      Email : this.user.Email,
      latitude: this.user.latitude,
      longitude : this.user.longitude,
      address : this.user.address,
          };
  
    this.firestore.update('users',client.id,client).then(res =>{
     
    //  this.router.navigate(['/registration']);
   // this.router.navigate(['/home'])
 });
  
  }

  save(){
    this.router.navigate(['/home'])
  }
  skip(){
    this.router.navigate(['/home'])
  }

  // logout(){
  //   this.ngfire.signOut().then(use => {
  //     this.router.navigate(['/login'])
  //   })
  // }
  
  getGeolocation(){
    this.router.navigate(['/geomap']);
  }

  
}         
