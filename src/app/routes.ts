import { Routes } from '@angular/router'
import { HitAlbumListComponent } from "./hit-album-list/hit-album-list.component";
import { HitHomeComponent } from "./hit-home/hit-home.component";
import { HitAlbumDetailComponent } from "./hit-album-detail/hit-album-detail.component"

export const appRoutes: Routes = [
    { path: 'Hit', component: HitHomeComponent },
    { path: 'albums', component: HitAlbumListComponent },
    {  path: 'albums/:name', component: HitAlbumDetailComponent},
    { path: '', redirectTo: '/Hit', pathMatch: 'full' }
]