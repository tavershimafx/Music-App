import { Component, OnInit } from '@angular/core';
import { AlbumsService } from '../albums.service';

@Component({
  templateUrl: './hit-album-list.component.html',
  styleUrls: ['./hit-album-list.component.css']
})
export class HitAlbumListComponent implements OnInit {
  albums: any[]

  constructor(private allAlbums: AlbumsService) { }

  ngOnInit(): void {
    this.albums = this.allAlbums.getAlbums()
  }

  

}
