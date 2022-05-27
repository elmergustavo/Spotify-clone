import { Component, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.models';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent implements OnInit {

  mockCover: TrackModel = {
    "_id": 1,
    "name": "Getting Over",
    "album": "One Love",
    "cover": "https://jenesaispop.com/wp-content/uploads/2009/09/guetta_onelove.jpg",
    "url": "http://localhost:3000/track.mp3"
}
  constructor() { }

  ngOnInit(): void {
  }

}
