import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule}from '@angular/fire/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyD85LYpWL7fBsu_fA0SJ1CjSq-im-C-Cok",
  authDomain: "apptestfirestore-577a1.firebaseapp.com",
  projectId: "apptestfirestore-577a1",
  storageBucket: "apptestfirestore-577a1.appspot.com",
  messagingSenderId: "1052949611119",
  appId: "1:1052949611119:web:88aaa108cfdbbc072e039a",
  measurementId: "G-HWYRF372J3"
};

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
  AngularFireModule.initializeApp(firebaseConfig),
  AngularFirestoreModule
],

  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
