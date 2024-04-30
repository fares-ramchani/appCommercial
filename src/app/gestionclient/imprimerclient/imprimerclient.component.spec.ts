import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImprimerclientComponent } from './imprimerclient.component';

describe('ImprimerclientComponent', () => {
  let component: ImprimerclientComponent;
  let fixture: ComponentFixture<ImprimerclientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImprimerclientComponent]
    });
    fixture = TestBed.createComponent(ImprimerclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
