import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateHomeComponent } from './private-home.component';

describe('PrivateHomeComponent', () => {
  let component: PrivateHomeComponent;
  let fixture: ComponentFixture<PrivateHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivateHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
