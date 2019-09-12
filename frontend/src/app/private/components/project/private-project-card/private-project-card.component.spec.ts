import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateProjectCardComponent } from './private-project-card.component';

describe('PrivateProjectCardComponent', () => {
  let component: PrivateProjectCardComponent;
  let fixture: ComponentFixture<PrivateProjectCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivateProjectCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateProjectCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
