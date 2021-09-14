import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumsService } from '../albums.service';

@Component({
  selector: 'hit-album-detail',
  templateUrl: './hit-album-detail.component.html',
  styleUrls: ['./hit-album-detail.component.css']
})
export class HitAlbumDetailComponent implements OnInit {
  public album: any
  

  constructor(private albumService: AlbumsService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.album = this.albumService.getAlbum(this.activatedRoute.snapshot.params['name'])
  }
}
