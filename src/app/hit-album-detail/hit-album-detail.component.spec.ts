import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HitAlbumDetailComponent } from './hit-album-detail.component';

describe('HitAlbumDetailComponent', () => {
  let component: HitAlbumDetailComponent;
  let fixture: ComponentFixture<HitAlbumDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HitAlbumDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HitAlbumDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
