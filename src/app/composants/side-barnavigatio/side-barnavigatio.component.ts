import { Component } from '@angular/core';
import { ShowComposantSidebarNvigationService } from 'src/app/services/show-composant-sidebar-nvigation.service';

@Component({
  selector: 'app-side-barnavigatio',
  templateUrl: './side-barnavigatio.component.html',
  styleUrls: ['./side-barnavigatio.component.css']
})
export class SideBarnavigatioComponent {
  showcomposantSideBarNavigation: boolean=false;
  constructor(private ShowComposantSidebarNvigationService:ShowComposantSidebarNvigationService){}
  closepopup() {
    this.ShowComposantSidebarNvigationService.setshowpopup();
   
  }
  ngOnInit(): void {

    this.ShowComposantSidebarNvigationService.showPopup1$.subscribe((inputData) => {
      this.showcomposantSideBarNavigation = inputData
      console.log(this.showcomposantSideBarNavigation)
  
      
    });
  }

}
