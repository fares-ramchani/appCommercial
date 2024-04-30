import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationclientAutreComponent } from './registrationclient-autre.component';

describe('RegistrationclientAutreComponent', () => {
  let component: RegistrationclientAutreComponent;
  let fixture: ComponentFixture<RegistrationclientAutreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrationclientAutreComponent]
    });
    fixture = TestBed.createComponent(RegistrationclientAutreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
