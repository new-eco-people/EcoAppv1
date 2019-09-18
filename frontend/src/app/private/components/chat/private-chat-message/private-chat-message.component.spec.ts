import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateChatMessageComponent } from './private-chat-message.component';

describe('PrivateChatMessageComponent', () => {
  let component: PrivateChatMessageComponent;
  let fixture: ComponentFixture<PrivateChatMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivateChatMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateChatMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
