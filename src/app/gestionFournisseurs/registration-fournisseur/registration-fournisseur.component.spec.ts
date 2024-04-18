import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationFournisseurComponent } from './registration-fournisseur.component';

describe('RegistrationFournisseurComponent', () => {
  let component: RegistrationFournisseurComponent;
  let fixture: ComponentFixture<RegistrationFournisseurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrationFournisseurComponent]
    });
    fixture = TestBed.createComponent(RegistrationFournisseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
