import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NoteService } from './service/note.service';
import { MesPhotosService } from './service/mesphotos.service';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';

export const firebaseConfig = {
  apiKey: "AIzaSyBYaI3NJv5QmlNQrw0FTWEhM3AAFfEHqAw",
  authDomain: "formation-alban-blocnote.firebaseapp.com",
  projectId: "formation-alban-blocnote",
  storageBucket: "formation-alban-blocnote.appspot.com",
  messagingSenderId: "1005646463376",
  appId: "1:1005646463376:web:ebbfa6047ef081c1903315",
  measurementId: "G-E9N4LV835G"
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireStorageModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, NoteService, MesPhotosService],
  bootstrap: [AppComponent],
})
export class AppModule {}
