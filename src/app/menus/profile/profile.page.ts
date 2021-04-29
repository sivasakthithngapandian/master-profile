import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  public profile = {
  businessname : '',
  name : '',
  Email : '',
  address: '',
  phone :'',
  }

  profiledata : any;
  ownerprofile=[];
  constructor(private firestore: FirestoreService,
              private api : ApiService) { }

  ngOnInit() {
    this.registerdetails()
  }

  registerdetails(){
    this.profile.businessname =this.api.businessname
    this.profile.name = this.api.name
    this.profile.Email= this.api.Email
    this.profile.address=this.api.address
    this.profile.phone=this.api.phone
    const ownerInfo = {
      id : '+919092085728',
      businessname : this.profile.businessname,
      Name : this.profile.name,
      Email : this.profile.Email,
      address : this.profile.address,
      phone : this.profile.phone
    }
    this.firestore.getdataregister('users', ownerInfo).subscribe(res=>{
      this.profiledata=res;
      console.log("result",this.profiledata);
      for(let i of this.profiledata){
        this.ownerprofile.push(i)
      }
    })
  }
}
