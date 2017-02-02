import { Component } from '@angular/core';

import { NavController, AlertController, ActionSheetController } from 'ionic-angular';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import {EditPage} from "../edit/edit";

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {

  songs: FirebaseListObservable<any>;

  constructor(public navCtrl: NavController,
              af:AngularFire,
              public actionSheetCtrl: ActionSheetController) {
    this.songs = af.database.list('/songs');
    console.log(this.songs);
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
    // TODO: open EditPage with song's properties in field and update song
    this.navCtrl.push(EditPage, {songId:songId, songTitle:songTitle, songArtist:songArtist, songAlbum:songAlbum})
  }

}
