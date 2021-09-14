import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HitAlbumThumbnailComponent } from './hit-album-thumbnail.component';

describe('HitAlbumThumbnailComponent', () => {
  let component: HitAlbumThumbnailComponent;
  let fixture: ComponentFixture<HitAlbumThumbnailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HitAlbumThumbnailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HitAlbumThumbnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
