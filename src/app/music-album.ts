import { Component } from '@angular/core';

@Component({
  selector: 'music-album',
  template:`
      <router-outlet></router-outlet>
      <footer>
				<div class="container">
					<!-- social media links -->
					<div class="social">
						<a class="h-facebook" href="#"><i class="fa fa-facebook"></i></a>
						<a class="h-google" href="#"><i class="fa fa-google-plus"></i></a>
						<a class="h-linkedin" href="#"><i class="fa fa-linkedin"></i></a>
						<a class="h-twitter" href="#"><i class="fa fa-twitter"></i></a>
					</div>
					<!-- copy right -->
					<p class="copy-right">&copy; copyright 2018, All rights are reserved.</p>
				</div>
			</footer>
    `
})
export class MusicAlbumSite {
  title = 'HIT';
}
