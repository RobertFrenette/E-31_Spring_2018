import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MountainComponent } from './mountain.component';

describe('MountainComponent', () => {
  let component: MountainComponent;
  let fixture: ComponentFixture<MountainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MountainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MountainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
