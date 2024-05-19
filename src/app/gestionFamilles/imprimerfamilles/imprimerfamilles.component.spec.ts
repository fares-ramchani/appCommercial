import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImprimerfamillesComponent } from './imprimerfamilles.component';

describe('ImprimerfamillesComponent', () => {
  let component: ImprimerfamillesComponent;
  let fixture: ComponentFixture<ImprimerfamillesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImprimerfamillesComponent]
    });
    fixture = TestBed.createComponent(ImprimerfamillesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
