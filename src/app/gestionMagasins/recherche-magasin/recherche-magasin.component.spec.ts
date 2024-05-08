import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheMagasinComponent } from './recherche-magasin.component';

describe('RechercheMagasinComponent', () => {
  let component: RechercheMagasinComponent;
  let fixture: ComponentFixture<RechercheMagasinComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RechercheMagasinComponent]
    });
    fixture = TestBed.createComponent(RechercheMagasinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
