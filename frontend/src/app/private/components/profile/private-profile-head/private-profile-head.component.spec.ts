import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateProfileHeadComponent } from './private-profile-head.component';

describe('PrivateProfileHeadComponent', () => {
  let component: PrivateProfileHeadComponent;
  let fixture: ComponentFixture<PrivateProfileHeadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivateProfileHeadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateProfileHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
