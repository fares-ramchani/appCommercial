import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercherFournisseurComponent } from './rechercher-fournisseur.component';

describe('RechercherFournisseurComponent', () => {
  let component: RechercherFournisseurComponent;
  let fixture: ComponentFixture<RechercherFournisseurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RechercherFournisseurComponent]
    });
    fixture = TestBed.createComponent(RechercherFournisseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
