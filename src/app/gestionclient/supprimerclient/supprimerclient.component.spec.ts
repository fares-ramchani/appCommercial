import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupprimerclientComponent } from './supprimerclient.component';

describe('SupprimerclientComponent', () => {
  let component: SupprimerclientComponent;
  let fixture: ComponentFixture<SupprimerclientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SupprimerclientComponent]
    });
    fixture = TestBed.createComponent(SupprimerclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
