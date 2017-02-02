import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'page-params',
  templateUrl: 'params.html'
})
export class ParamsPage {

  color: any;

  constructor(public storage: Storage) {
    this.color = storage.get('color');

    if(!this.color){
      storage.set('color', 'primary');
    }

    console.log(this.storage.get('color'));

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ParamsPage');
  }

  changeColor(color){
    this.color = color;
    this.storage.set('color', color);
    console.log(this.storage.get('color'));
    location.reload();
  }


}
