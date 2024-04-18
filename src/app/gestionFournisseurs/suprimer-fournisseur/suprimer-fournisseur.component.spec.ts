import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuprimerFournisseurComponent } from './suprimer-fournisseur.component';

describe('SuprimerFournisseurComponent', () => {
  let component: SuprimerFournisseurComponent;
  let fixture: ComponentFixture<SuprimerFournisseurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuprimerFournisseurComponent]
    });
    fixture = TestBed.createComponent(SuprimerFournisseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
