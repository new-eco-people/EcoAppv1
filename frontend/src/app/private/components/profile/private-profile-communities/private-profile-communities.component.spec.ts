import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateProfileCommunitiesComponent } from './private-profile-communities.component';

describe('PrivateProfileCommunitiesComponent', () => {
  let component: PrivateProfileCommunitiesComponent;
  let fixture: ComponentFixture<PrivateProfileCommunitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivateProfileCommunitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateProfileCommunitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
