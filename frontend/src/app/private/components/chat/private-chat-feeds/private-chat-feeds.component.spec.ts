import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateChatFeedsComponent } from './private-chat-feeds.component';

describe('PrivateChatFeedsComponent', () => {
  let component: PrivateChatFeedsComponent;
  let fixture: ComponentFixture<PrivateChatFeedsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivateChatFeedsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateChatFeedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
