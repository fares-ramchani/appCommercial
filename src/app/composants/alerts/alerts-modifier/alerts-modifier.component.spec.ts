import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertsModifierComponent } from './alerts-modifier.component';

describe('AlertsModifierComponent', () => {
  let component: AlertsModifierComponent;
  let fixture: ComponentFixture<AlertsModifierComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlertsModifierComponent]
    });
    fixture = TestBed.createComponent(AlertsModifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
