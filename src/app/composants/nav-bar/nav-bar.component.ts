import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { ShowComposantSidebarNvigationService } from 'src/app/services/show-composant-sidebar-nvigation.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  showcomposantSideBarNavigation: boolean=false;
  constructor(private ShowComposantSidebarNvigationService:ShowComposantSidebarNvigationService){}
  ngOnInit(): void {
    this.ShowComposantSidebarNvigationService.showPopup1$.subscribe((inputData) => {
      this.showcomposantSideBarNavigation = inputData
  
      
    });
  }
  closepopup() {
    this.ShowComposantSidebarNvigationService.setshowpopup();
   
  }

  

}
