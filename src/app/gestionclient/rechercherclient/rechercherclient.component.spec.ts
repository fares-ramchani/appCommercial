import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercherclientComponent } from './rechercherclient.component';

describe('RechercherclientComponent', () => {
  let component: RechercherclientComponent;
  let fixture: ComponentFixture<RechercherclientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RechercherclientComponent]
    });
    fixture = TestBed.createComponent(RechercherclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
