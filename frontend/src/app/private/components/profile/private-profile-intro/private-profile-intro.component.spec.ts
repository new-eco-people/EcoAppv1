import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateProfileIntroComponent } from './private-profile-intro.component';

describe('PrivateProfileIntroComponent', () => {
  let component: PrivateProfileIntroComponent;
  let fixture: ComponentFixture<PrivateProfileIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivateProfileIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateProfileIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
