import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImprimermagasinComponent } from './imprimermagasin.component';

describe('ImprimermagasinComponent', () => {
  let component: ImprimermagasinComponent;
  let fixture: ComponentFixture<ImprimermagasinComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImprimermagasinComponent]
    });
    fixture = TestBed.createComponent(ImprimermagasinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
