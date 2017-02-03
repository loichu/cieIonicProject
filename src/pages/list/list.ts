import { Component } from '@angular/core';

import { NavController, ActionSheetController } from 'ionic-angular';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import {EditPage} from "../edit/edit";
import { Splashscreen } from 'ionic-native';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {

  songs: FirebaseListObservable<any>;

  constructor(public navCtrl: NavController,
              af:AngularFire,
              public actionSheetCtrl: ActionSheetController) {
    Splashscreen.show();
    this.songs = af.database.list('/songs');
    console.log(this.songs);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ParamsPage');
    Splashscreen.hide();
  }

  showOptions(songId, songTitle, songArtist, songAlbum) {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'What do you want to do?',
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          handler: () => {
            this.removeSong(songId);
          }
        },{
          text: 'Update',
          handler: () => {
            this.updateSong(songId, songTitle, songArtist, songAlbum);
          }
        },{
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

  removeSong(songId: string){
    this.songs.remove(songId);
  }

  updateSong(songId, songTitle, songArtist, songAlbum){
    this.navCtrl.push(EditPage, {songId:songId, songTitle:songTitle, songArtist:songArtist, songAlbum:songAlbum})
  }

  addSong(){
    this.navCtrl.push(EditPage);
  }

}
