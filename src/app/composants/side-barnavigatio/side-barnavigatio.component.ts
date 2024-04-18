import { Component } from '@angular/core';
import { ShowComposantSidebarNvigationService } from 'src/app/services/show-composant-sidebar-nvigation.service';

@Component({
  selector: 'app-side-barnavigatio',
  templateUrl: './side-barnavigatio.component.html',
  styleUrls: ['./side-barnavigatio.component.css']
})
export class SideBarnavigatioComponent {
  constructor(private ShowComposantSidebarNvigationService:ShowComposantSidebarNvigationService){}
  closepopup() {
    this.ShowComposantSidebarNvigationService.setshowpopup();
   
  }

}
