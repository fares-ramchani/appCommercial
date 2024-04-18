import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationFournisseurMemoComponent } from './registration-fournisseur-memo.component';

describe('RegistrationFournisseurMemoComponent', () => {
  let component: RegistrationFournisseurMemoComponent;
  let fixture: ComponentFixture<RegistrationFournisseurMemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrationFournisseurMemoComponent]
    });
    fixture = TestBed.createComponent(RegistrationFournisseurMemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
