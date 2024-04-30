import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationclientComponent } from './registrationclient.component';

describe('RegistrationclientComponent', () => {
  let component: RegistrationclientComponent;
  let fixture: ComponentFixture<RegistrationclientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrationclientComponent]
    });
    fixture = TestBed.createComponent(RegistrationclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
