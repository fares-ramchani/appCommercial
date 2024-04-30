import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationclientFicheComponent } from './registrationclient-fiche.component';

describe('RegistrationclientFicheComponent', () => {
  let component: RegistrationclientFicheComponent;
  let fixture: ComponentFixture<RegistrationclientFicheComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrationclientFicheComponent]
    });
    fixture = TestBed.createComponent(RegistrationclientFicheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
