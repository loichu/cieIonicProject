import { Component } from '@angular/core';

import { NavParams } from 'ionic-angular';
import {AngularFire, FirebaseListObservable} from 'angularfire2';

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


  constructor(af:AngularFire,
              navParams: NavParams) {
    this.songs = af.database.list('/songs');
    this.songId = navParams.get("songId");
    this.songTitle = navParams.get("songTitle");
    this.songArtist = navParams.get("songArtist");
    this.songAlbum = navParams.get("songAlbum");

    if(this.songId){

      this.titleBody = "Update your ";
      this.titleHead = "Update";

    } else {

      this.titleBody = "Register a new ";
      this.titleHead = "New";
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
    page.open()
  }

  updateSong(form){
    console.log(form.value);
    let song = form.value;
    this.songs.update(this.songId, {
      title: song.title,
      album: song.album,
      artist: song.artist
    });
  }

  isUpdate(){
    if(this.songId){
      return true;
    } else {
      return false;
    }
  }

}
