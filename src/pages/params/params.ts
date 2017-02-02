import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'page-params',
  templateUrl: 'params.html'
})
export class ParamsPage {

  constructor(public storage: Storage) {

    if(this.getColor() == undefined){
      this.setColor('light');
    }

    console.log(this.getColor());
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ParamsPage');
  }

  setColor(color){
    this.storage.set('color', color);
    console.log(this.storage.get('color'));
  }

  getColor(){
    this.storage.get('color');
  }


}
