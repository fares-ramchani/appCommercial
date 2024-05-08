import { Component } from '@angular/core';
import { ShowComposantrecherchermagasinService } from 'src/app/services/show-composantrecherchermagasin.service';

@Component({
  selector: 'app-recherche-magasin',
  templateUrl: './recherche-magasin.component.html',
  styleUrls: ['./recherche-magasin.component.css']
})
export class RechercheMagasinComponent {
  constructor(private ShowComposantrecherchermagasinService: ShowComposantrecherchermagasinService){}
  closepopup() {
    this.ShowComposantrecherchermagasinService.setshowpopup();

  }
}
