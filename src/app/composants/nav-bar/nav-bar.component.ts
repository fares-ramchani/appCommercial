import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { ShowComposantSidebarNvigationService } from 'src/app/services/show-composant-sidebar-nvigation.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  showcomposantSideBarNavigation: boolean=false;
  username:string|null=""
  constructor(private LoginService:LoginService,private router:Router,private ShowComposantSidebarNvigationService:ShowComposantSidebarNvigationService){}
  ngOnInit(): void {

    this.ShowComposantSidebarNvigationService.showPopup1$.subscribe((inputData) => {
      this.showcomposantSideBarNavigation = inputData
      console.log(this.showcomposantSideBarNavigation)
  
      
    });
    this.username=localStorage.getItem("username")
  }
  closepopup() {
    this.ShowComposantSidebarNvigationService.setshowpopup();
   
  }
  Deconnexion(){
    localStorage.removeItem('token')
    localStorage.removeItem("username")
    this.LoginService.deconnecter();
    this.router.navigateByUrl("/")

  }

  

}
