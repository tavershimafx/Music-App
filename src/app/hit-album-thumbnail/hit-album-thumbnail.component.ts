import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'hit-album-thumbnail',
  templateUrl: './hit-album-thumbnail.component.html',
  styleUrls: ['./hit-album-thumbnail.component.css']
})
export class HitAlbumThumbnailComponent implements OnInit {

    @Input() albumThumbnail: any

  constructor() { }

  ngOnInit(): void {
  }

}
