import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import {ApiService} from 'src/app/services/api.service';
import {FirestoreService} from 'src/app/services/firestore.service';
//import { AuthService } from '@angular/fire/auth-guard/auth-guard.module';
import {Router} from '@angular/router';
import {ActionSheetController} from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import firebase from 'firebase/app';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.page.html',
  styleUrls: ['./myprofile.page.scss'],
})
export class MyprofilePage implements OnInit {
  public profile={
    businessname :'',
  name :'',
Email :'',
address :'',
phone :'',
dialcode:'+91',
  }
  profiledata:any;
  ownerprofile=[];

  constructor(private Firestore: FirestoreService,
    private Apiservice : ApiService,
    private Router: Router,
    private camera : Camera,
    private database:AngularFirestore,
    private actionSheetCtrl:ActionSheetController ) { }
    

  options: CameraOptions = {
    quality: 100,
    sourceType:this.camera.PictureSourceType.PHOTOLIBRARY,
    destinationType: this.camera.DestinationType.FILE_URI,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }

  async presentActionSheet(){
    const actionSheet = await this.actionSheetCtrl.create({
      header:'Choose',
      buttons:[
        {
          text: 'Camera',
          role:'destructive',
          icon: 'camera',
          handler:()=>{
            console.log('The Camera has been clicked!');
          }
         
        },{
          text:'Gallery',
          icon:'image',
          handler:()=>{
            console.log('The Gallery has been clicked!');
          }
        },{
          text:'Cancel',
          role:'close',
          icon:'close',
          handler:()=>{ 
            console.log('The Gallery has been clicked!');
          }
        }
      ],
      cssClass:'my-css',
      animated: false,
      backdropDismiss:false,
      keyboardClose:false,
    });
   await actionSheet.present();
    actionSheet.onWillDismiss().then(()=>{
      console.log('the action sheet is about to close');
    });
    actionSheet.onDidDismiss().then(()=>{
      console.log('the action sheet has already closed');
    });
  
  }
  ngOnInit() {
    firebase.auth().onAuthStateChanged(user=>{
      console.log("AUTH_USER",user);
      if(user){
        this.Firestore.getOne('users', user.uid).subscribe(data =>{
          this.ownerprofile.push(data);
          console.log(data);
        })
      }
    })
  
}

Accesscamera(){
  this.Apiservice.openCamera();
  }
  AccessGallery(){

    this.Apiservice.openGallery();
  }
registerdetails(){
  this.profile.businessname=this.Apiservice.businessname
  this.profile.name=this.Apiservice.name
  this.profile.address=this.Apiservice.address
  this.profile.phone=this.Apiservice.phone
  this.profile.Email=this.Apiservice.Email
 
  const ownerInfo={
    id:'+917639077071',
    businessname : this.profile.businessname,
    name: this.profile.name,
    address: this.profile.address,
    phone:this.profile.phone,
    Email:this.profile.Email

  }
  this.Firestore.getuser('users',ownerInfo).subscribe(res=>{
    this.profiledata =res;
    console.log("result",this.profiledata);
    for(let i of this.profiledata){
      this.ownerprofile.push(i)
    }
  })
}
}






