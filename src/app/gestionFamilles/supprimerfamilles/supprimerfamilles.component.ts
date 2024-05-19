import { Component } from '@angular/core';
import { ShowComposantsupprimerfamilleService } from 'src/app/services/show-composantsupprimerfamille.service';

@Component({
  selector: 'app-supprimerfamilles',
  templateUrl: './supprimerfamilles.component.html',
  styleUrls: ['./supprimerfamilles.component.css']
})
export class SupprimerfamillesComponent {
  constructor(private ShowComposantsupprimerfamilleService: ShowComposantsupprimerfamilleService){}
  closepopup() {
    this.ShowComposantsupprimerfamilleService.setshowpopup();

  }
}
