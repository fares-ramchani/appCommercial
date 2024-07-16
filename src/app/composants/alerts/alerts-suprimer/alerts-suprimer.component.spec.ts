import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertsSuprimerComponent } from './alerts-suprimer.component';

describe('AlertsSuprimerComponent', () => {
  let component: AlertsSuprimerComponent;
  let fixture: ComponentFixture<AlertsSuprimerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlertsSuprimerComponent]
    });
    fixture = TestBed.createComponent(AlertsSuprimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
