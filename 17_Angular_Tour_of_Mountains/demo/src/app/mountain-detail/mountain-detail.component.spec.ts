import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MountainDetailComponent } from './mountain-detail.component';

describe('MountainDetailComponent', () => {
  let component: MountainDetailComponent;
  let fixture: ComponentFixture<MountainDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MountainDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MountainDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
