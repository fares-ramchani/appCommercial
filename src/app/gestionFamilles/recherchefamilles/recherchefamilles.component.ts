import { Component } from '@angular/core';
import { ShowComposantrecherchefamilleService } from 'src/app/services/show-composantrecherchefamille.service';

@Component({
  selector: 'app-recherchefamilles',
  templateUrl: './recherchefamilles.component.html',
  styleUrls: ['./recherchefamilles.component.css']
})
export class RecherchefamillesComponent {
  constructor(private ShowComposantrecherchefamilleService: ShowComposantrecherchefamilleService){}
  closepopup() {
    this.ShowComposantrecherchefamilleService.setshowpopup();

  }
}
