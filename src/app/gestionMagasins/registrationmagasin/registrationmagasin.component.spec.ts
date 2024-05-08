import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationmagasinComponent } from './registrationmagasin.component';

describe('RegistrationmagasinComponent', () => {
  let component: RegistrationmagasinComponent;
  let fixture: ComponentFixture<RegistrationmagasinComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrationmagasinComponent]
    });
    fixture = TestBed.createComponent(RegistrationmagasinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
