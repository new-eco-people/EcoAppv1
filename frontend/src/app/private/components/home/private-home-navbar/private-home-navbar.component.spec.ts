import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateHomeNavbarComponent } from './private-home-navbar.component';

describe('PrivateHomeNavbarComponent', () => {
  let component: PrivateHomeNavbarComponent;
  let fixture: ComponentFixture<PrivateHomeNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivateHomeNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateHomeNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
