import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBarnavigatioComponent } from './side-barnavigatio.component';

describe('SideBarnavigatioComponent', () => {
  let component: SideBarnavigatioComponent;
  let fixture: ComponentFixture<SideBarnavigatioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SideBarnavigatioComponent]
    });
    fixture = TestBed.createComponent(SideBarnavigatioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
