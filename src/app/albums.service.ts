import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  getAlbums(){
    return ALBUMS
  }

  getAlbum(name: string){
    return ALBUMS.find(album => album.albumName === name)
  }
}

const ALBUMS = [
  {
    id: 1,
    albumName: 'Twice as tall',
    artist: 'BurnaBoy',
    releaseDate: '12/02/2019',
    img: "../../assets/cover-pics/burnaboy.jpg",
    tracks: [
      {
        trackName: 'Dangote',
        type: 'Afrobeat',
      },
      {
        trackName: 'Anybody',
        type: 'Afrobeat',
      },
      {
        trackName: 'on_the_Low',
        type: 'Afrobeat',
      },
      {
        trackName: 'pull_up',
        type: 'Afrobeat',
      },
      {
        trackName: 'wetin_man_do',
        type: 'Afrobeat',
      },
      {
        trackName: 'Deja_vu',
        type: 'Afrobeat',
      },
    ]
  },
  {
    id: 2,
    albumName: 'Africa',
    artist: 'Wizkid',
    releaseDate: '12/02/2019',
    img: "../../assets/cover-pics/wizkid.jpg",
    tracks: [
      {
        trackName: 'Dangote',
        type: 'Afrobeat',
      },
      {
        trackName: 'Anybody',
        type: 'Afrobeat',
      },
      {
        trackName: 'on_the_Low',
        type: 'Afrobeat',
      },
      {
        trackName: 'pull_up',
        type: 'Afrobeat',
      },
      {
        trackName: 'wetin_man_do',
        type: 'Afrobeat',
      },
      {
        trackName: 'Deja_vu',
        type: 'Afrobeat',
      },
    ]
  },
  {
    id: 3,
    albumName: 'Oil',
    artist: 'Phyno',
    releaseDate: '12/02/2019',
    img: "../../assets/cover-pics/phyno.jpg",
    tracks: [
      {
        trackName: 'Dangote',
        type: 'Afrobeat',
      },
      {
        trackName: 'Anybody',
        type: 'Afrobeat',
      },
      {
        trackName: 'on_the_Low',
        type: 'Afrobeat',
      },
      {
        trackName: 'pull_up',
        type: 'Afrobeat',
      },
      {
        trackName: 'wetin_man_do',
        type: 'Afrobeat',
      },
      {
        trackName: 'Deja_vu',
        type: 'Afrobeat',
      },
    ]
  },
  {
    id: 4,
    albumName: 'Sudden',
    artist: 'Tekno',
    releaseDate: '12/02/2019',
    img: "../../assets/cover-pics/tecno.jpg",
    tracks: [
      {
        trackName: 'Dangote',
        type: 'Afrobeat',
      },
      {
        trackName: 'Anybody',
        type: 'Afrobeat',
      },
      {
        trackName: 'on_the_Low',
        type: 'Afrobeat',
      },
      {
        trackName: 'pull_up',
        type: 'Afrobeat',
      },
      {
        trackName: 'wetin_man_do',
        type: 'Afrobeat',
      },
      {
        trackName: 'Deja_vu',
        type: 'Afrobeat',
      },
    ]
  },
  {
    id: 5,
    albumName: 'Call Waiting',
    artist: 'Eazi',
    releaseDate: '12/02/2019',
    img: "../../assets/cover-pics/eazi.jpg",
    tracks: [
      {
        trackName: 'Dangote',
        type: 'Afrobeat',
      },
      {
        trackName: 'Anybody',
        type: 'Afrobeat',
      },
      {
        trackName: 'on_the_Low',
        type: 'Afrobeat',
      },
      {
        trackName: 'pull_up',
        type: 'Afrobeat',
      },
      {
        trackName: 'wetin_man_do',
        type: 'Afrobeat',
      },
      {
        trackName: 'Deja_vu',
        type: 'Afrobeat',
      },
    ]
  },
  {
    id: 6,
    albumName: 'Gold',
    artist: 'Izycs',
    releaseDate: '12/02/2019',
    img: "../../assets/cover-pics/izycs.jpg",
    tracks: [
      {
        trackName: 'Dangote',
        type: 'Afrobeat',
      },
      {
        trackName: 'Anybody',
        type: 'Afrobeat',
      },
      {
        trackName: 'on_the_Low',
        type: 'Afrobeat',
      },
      {
        trackName: 'pull_up',
        type: 'Afrobeat',
      },
      {
        trackName: 'wetin_man_do',
        type: 'Afrobeat',
      },
      {
        trackName: 'Deja_vu',
        type: 'Afrobeat',
      },
    ]
  },
]
