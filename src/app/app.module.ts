import { NgModule,ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {ApiService} from '../app/services/api.service';
import { FirestoreService } from './services/firestore.service';
import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import {Geolocation} from '@ionic-native/geolocation/ngx';
import {FormsModule} from '@angular/forms'
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { AngularFireStorageModule } from '@angular/fire/storage';
import {StorageService} from './services/firestorage.service'
import {AmazingTimePickerModule} from 'amazing-time-picker'
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';




@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AmazingTimePickerModule,
    AngularFireAuthModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: httpTranslateLoader,
          deps: [HttpClient]
      }
  }),
    NgbModule],
  providers: [{ provide: RouteReuseStrategy , useClass: IonicRouteStrategy },
    //{provide: ErrorHandler, useClass: IonicErrorHandler},
  ApiService,
  FormsModule,
  Geolocation,
  StorageService,
  Camera,
  FirestoreService],
  bootstrap: [AppComponent],
})
export class AppModule {}
//AoT requires an exported function for factories
export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
