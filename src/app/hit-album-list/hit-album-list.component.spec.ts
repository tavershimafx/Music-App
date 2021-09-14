import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HitAlbumListComponent } from './hit-album-list.component';

describe('HitAlbumListComponent', () => {
  let component: HitAlbumListComponent;
  let fixture: ComponentFixture<HitAlbumListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HitAlbumListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HitAlbumListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
