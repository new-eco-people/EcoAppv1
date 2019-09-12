import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateProblemCardComponent } from './private-problem-card.component';

describe('PrivateProblemCardComponent', () => {
  let component: PrivateProblemCardComponent;
  let fixture: ComponentFixture<PrivateProblemCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivateProblemCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateProblemCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
