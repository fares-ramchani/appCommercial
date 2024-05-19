import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationfamillesComponent } from './registrationfamilles.component';

describe('RegistrationfamillesComponent', () => {
  let component: RegistrationfamillesComponent;
  let fixture: ComponentFixture<RegistrationfamillesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrationfamillesComponent]
    });
    fixture = TestBed.createComponent(RegistrationfamillesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
