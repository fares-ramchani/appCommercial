import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupprimerfamillesComponent } from './supprimerfamilles.component';

describe('SupprimerfamillesComponent', () => {
  let component: SupprimerfamillesComponent;
  let fixture: ComponentFixture<SupprimerfamillesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SupprimerfamillesComponent]
    });
    fixture = TestBed.createComponent(SupprimerfamillesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
