import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBarOptionComponent } from './side-bar-option.component';

describe('SideBarOptionComponent', () => {
  let component: SideBarOptionComponent;
  let fixture: ComponentFixture<SideBarOptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SideBarOptionComponent]
    });
    fixture = TestBed.createComponent(SideBarOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
