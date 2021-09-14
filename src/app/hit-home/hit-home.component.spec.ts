import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HitHomeComponent } from './hit-home.component';

describe('HitHomeComponent', () => {
  let component: HitHomeComponent;
  let fixture: ComponentFixture<HitHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HitHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HitHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
