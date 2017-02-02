import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { EditPage } from '../pages/edit/edit';
import { ListPage } from '../pages/list/list';
import { MapPage } from '../pages/map/map';
import { ParamsPage } from '../pages/params/params';
import { Storage } from '@ionic/storage';


// Import the AF2 Module
import { AngularFireModule } from 'angularfire2';

// AF2 Settings
export const firebaseConfig = {
  apiKey: "AIzaSyBTZizOc0D7TmgEd5CAx_5-g4L1PmW4Z0Q",
  authDomain: "cieionicproject.firebaseapp.com",
  databaseURL: "https://cieionicproject.firebaseio.com/",
  storageBucket: "cieionicproject.appspot.com",
  messagingSenderId: "463560420493"
};

@NgModule({
  declarations: [
    MyApp,
    EditPage,
    ListPage,
    MapPage,
    ParamsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    EditPage,
    ListPage,
    MapPage,
    ParamsPage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Storage
  ]
})
export class AppModule {}
