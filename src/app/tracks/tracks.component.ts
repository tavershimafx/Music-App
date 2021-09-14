import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.css']
})
export class TracksComponent implements OnInit {
  @Input() albumTracks: any

  constructor() { }

  ngOnInit(): void {
  }

}
