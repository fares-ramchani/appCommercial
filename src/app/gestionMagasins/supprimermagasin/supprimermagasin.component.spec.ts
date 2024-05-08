import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupprimermagasinComponent } from './supprimermagasin.component';

describe('SupprimermagasinComponent', () => {
  let component: SupprimermagasinComponent;
  let fixture: ComponentFixture<SupprimermagasinComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SupprimermagasinComponent]
    });
    fixture = TestBed.createComponent(SupprimermagasinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
