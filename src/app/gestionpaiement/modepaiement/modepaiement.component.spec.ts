import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModepaiementComponent } from './modepaiement.component';

describe('ModepaiementComponent', () => {
  let component: ModepaiementComponent;
  let fixture: ComponentFixture<ModepaiementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModepaiementComponent]
    });
    fixture = TestBed.createComponent(ModepaiementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
