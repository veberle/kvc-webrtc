import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalvideoComponent } from './localvideo.component';

describe('LocalvideoComponent', () => {
  let component: LocalvideoComponent;
  let fixture: ComponentFixture<LocalvideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalvideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalvideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
