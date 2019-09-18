import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateHomeTopnavbarComponent } from './private-home-topnavbar.component';

describe('PrivateHomeTopnavbarComponent', () => {
  let component: PrivateHomeTopnavbarComponent;
  let fixture: ComponentFixture<PrivateHomeTopnavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivateHomeTopnavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateHomeTopnavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
