import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MusicAlbumSite } from './music-album';
import { HitHomeComponent } from './hit-home/hit-home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HitAlbumListComponent } from './hit-album-list/hit-album-list.component';
import { HitAlbumThumbnailComponent } from './hit-album-thumbnail/hit-album-thumbnail.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { HitAlbumDetailComponent } from './hit-album-detail/hit-album-detail.component';
import { TracksComponent } from './tracks/tracks.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './modal/modal.component'

@NgModule({
  declarations: [
    MusicAlbumSite,
    HitHomeComponent,
    NavBarComponent,
    HitAlbumListComponent,
    HitAlbumThumbnailComponent,
    HitAlbumDetailComponent,
    TracksComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [MusicAlbumSite]
})
export class AppModule { }
