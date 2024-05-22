import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-principale',
  templateUrl: './menu-principale.component.html',
  styleUrls: ['./menu-principale.component.css']
})
export class MenuPrincipaleComponent {
  username:string|null=""
  ngOnInit(): void {
    this.username=localStorage.getItem("username")
  }
}
