import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateProfileProjectsComponent } from './private-profile-projects.component';

describe('PrivateProfileProjectsComponent', () => {
  let component: PrivateProfileProjectsComponent;
  let fixture: ComponentFixture<PrivateProfileProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivateProfileProjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateProfileProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
