import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateAddProblemComponent } from './private-add-problem.component';

describe('PrivateAddProblemComponent', () => {
  let component: PrivateAddProblemComponent;
  let fixture: ComponentFixture<PrivateAddProblemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivateAddProblemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateAddProblemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
