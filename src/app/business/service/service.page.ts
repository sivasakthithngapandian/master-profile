import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { ApiService } from 'src/app/services/api.service';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.page.html',
  styleUrls: ['./service.page.scss'],
})
export class ServicePage implements OnInit {

  public services={
    ServiceName : '',
    categories: '',
    duration : 'hours' + 'minutes',
    hours : '',
    minutes : '',
    price : ''
  }

  categoriesdata: any;
  categoriesdatalist =[];
  constructor(private router : Router,
               private api : ApiService,
               private firestore : FirestoreService) { }

  ngOnInit() {
    //this.categoriesdetail()
  }

  back(){
     this.router.navigate(['/home'])
  }
  
  getServiceDetails(){
    const serviceInfo ={
      id : '+919092085728',
      ServiceName : this.services.ServiceName,
      categories: this.services.categories,
      duration : this.services.hours+ ' ' +'to'+' ' + this.services.minutes,
      price : this.services.price,
    }
    this.firestore.updateField('users','service', serviceInfo.id, serviceInfo).then(response =>{
       console.log("response",response)
    });
    console.log('services',this.services)
  }

  // categoriesdetail(){
  //   this.services.categories = this.api.categories
  //   const categoriesInfo ={
  //     id : '+91909205728',
  //     categories : this.services.categories
  //   }
  //   this.firestore.getdataregister('users',categoriesInfo).subscribe(res=>{
  //     this.categoriesdata=res
  //     //console.log('result',res)
  //     for(let i of this.categoriesdata){
  //       this.categoriesdatalist.push(i)
  //       console.log("categg",this.categoriesdatalist)
  //     }
  //   })
  // }
}
