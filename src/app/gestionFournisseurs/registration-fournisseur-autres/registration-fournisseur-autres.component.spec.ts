import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationFournisseurAutresComponent } from './registration-fournisseur-autres.component';

describe('RegistrationFournisseurAutresComponent', () => {
  let component: RegistrationFournisseurAutresComponent;
  let fixture: ComponentFixture<RegistrationFournisseurAutresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrationFournisseurAutresComponent]
    });
    fixture = TestBed.createComponent(RegistrationFournisseurAutresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
