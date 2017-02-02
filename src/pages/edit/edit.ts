import { Component } from '@angular/core';

import { NavParams, NavController } from 'ionic-angular';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import { ListPage } from '../list/list';

@Component({
  selector: 'page-edit',
  templateUrl: 'edit.html'
})
export class EditPage {

  songs: FirebaseListObservable<any>;

  songId: any;
  songTitle: any;
  songArtist: any;
  songAlbum: any;

  titleHead: any;
  titleBody: any;

  button: any;

  constructor(public navCtrl: NavController,
              af:AngularFire,
              navParams: NavParams) {
    this.songs = af.database.list('/songs');
    this.songId = navParams.get("songId");
    this.songTitle = navParams.get("songTitle");
    this.songArtist = navParams.get("songArtist");
    this.songAlbum = navParams.get("songAlbum");

    if(this.songId){

      this.titleBody = "Update your ";
      this.titleHead = "Update";

      this.button = "Update !";

    } else {

      this.titleBody = "Register a new ";
      this.titleHead = "New";

      this.button = "Add !";

    }


  }

  addSong(form){
    console.log(form.value);
    let song = form.value;
    this.songs.push({
      title: song.title,
      album: song.album,
      artist: song.artist
    });
    this.navCtrl.setRoot(ListPage);
  }

  updateSong(form){
    console.log(form.value);
    let song = form.value;
    this.songs.update(this.songId, {
      title: song.title,
      album: song.album,
      artist: song.artist
    });
    this.navCtrl.setRoot(ListPage);
  }

  isUpdate(){
    if(this.songId){
      return true;
    } else {
      return false;
    }
  }

  Submit(form){
    if(this.songId){
      this.updateSong(form);
    } else {
      this.addSong(form);
    }
  }

}
