import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateCommunityFeedsComponent } from './private-community-feeds.component';

describe('PrivateCommunityFeedsComponent', () => {
  let component: PrivateCommunityFeedsComponent;
  let fixture: ComponentFixture<PrivateCommunityFeedsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivateCommunityFeedsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateCommunityFeedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
