import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateProjectFeedsComponent } from './private-project-feeds.component';

describe('PrivateProjectFeedsComponent', () => {
  let component: PrivateProjectFeedsComponent;
  let fixture: ComponentFixture<PrivateProjectFeedsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivateProjectFeedsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateProjectFeedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
