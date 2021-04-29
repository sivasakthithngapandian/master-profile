import { Component } from '@angular/core';
import {Router} from '@angular/router'
import {Platform} from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import {HomePage} from '../app/home/home.page';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private router : Router,
    public translate:TranslateService,
    /*private _platform : Platform*/) {

     translate.addLangs(['en','nl']);
     translate.setDefaultLang('en');
   }
 
 

  close(){
    this.router.navigate(['/login'])
  }
  
  
 /* private _initTranslate() 
  {
     // Set the default language for translation strings, and the current language.
     this._translate.setDefaultLang('en');


     if (this._translate.getBrowserLang() !== undefined) 
     {
         this._translate.use(this._translate.getBrowserLang());
     } 
     else 
     {
         this._translate.use('en'); // Set your language here
     }
  }
  */
  switchLang(lang: string) {
    this.translate.use(lang);
  }
}
