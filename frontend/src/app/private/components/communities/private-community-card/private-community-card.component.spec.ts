import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateCommunityCardComponent } from './private-community-card.component';

describe('PrivateCommunityCardComponent', () => {
  let component: PrivateCommunityCardComponent;
  let fixture: ComponentFixture<PrivateCommunityCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivateCommunityCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateCommunityCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
