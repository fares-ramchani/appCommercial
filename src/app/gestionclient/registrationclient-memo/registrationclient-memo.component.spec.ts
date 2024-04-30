import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationclientMemoComponent } from './registrationclient-memo.component';

describe('RegistrationclientMemoComponent', () => {
  let component: RegistrationclientMemoComponent;
  let fixture: ComponentFixture<RegistrationclientMemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrationclientMemoComponent]
    });
    fixture = TestBed.createComponent(RegistrationclientMemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
