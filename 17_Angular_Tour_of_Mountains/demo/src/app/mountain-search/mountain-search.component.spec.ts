import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MountainSearchComponent } from './mountain-search.component';

describe('MountainSearchComponent', () => {
  let component: MountainSearchComponent;
  let fixture: ComponentFixture<MountainSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MountainSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MountainSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
