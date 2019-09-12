import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateProblemFeedsComponent } from './private-problem-feeds.component';

describe('PrivateProblemFeedsComponent', () => {
  let component: PrivateProblemFeedsComponent;
  let fixture: ComponentFixture<PrivateProblemFeedsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivateProblemFeedsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateProblemFeedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
