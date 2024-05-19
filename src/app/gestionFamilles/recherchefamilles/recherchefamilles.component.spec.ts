import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecherchefamillesComponent } from './recherchefamilles.component';

describe('RecherchefamillesComponent', () => {
  let component: RecherchefamillesComponent;
  let fixture: ComponentFixture<RecherchefamillesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecherchefamillesComponent]
    });
    fixture = TestBed.createComponent(RecherchefamillesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
