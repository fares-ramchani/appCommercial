import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationFournisseurFicheComponent } from './registration-fournisseur-fiche.component';

describe('RegistrationFournisseurFicheComponent', () => {
  let component: RegistrationFournisseurFicheComponent;
  let fixture: ComponentFixture<RegistrationFournisseurFicheComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrationFournisseurFicheComponent]
    });
    fixture = TestBed.createComponent(RegistrationFournisseurFicheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
