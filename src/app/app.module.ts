import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { EditPage } from '../pages/edit/edit';
import { ListPage } from '../pages/list/list';
import { MapPage } from '../pages/map/map';
import { ParamsPage } from '../pages/params/params';

@NgModule({
  declarations: [
    MyApp,
    EditPage,
    ListPage,
    MapPage,
    ParamsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    EditPage,
    ListPage,
    MapPage,
    ParamsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
