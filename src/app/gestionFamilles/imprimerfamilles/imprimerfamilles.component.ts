import { Component } from '@angular/core';
import { ShowComposantimprimerfamilleService } from 'src/app/services/show-composantimprimerfamille.service';

@Component({
  selector: 'app-imprimerfamilles',
  templateUrl: './imprimerfamilles.component.html',
  styleUrls: ['./imprimerfamilles.component.css']
})
export class ImprimerfamillesComponent {
  constructor(private ShowComposantimprimerfamilleService: ShowComposantimprimerfamilleService){}
  closepopup() {
    this.ShowComposantimprimerfamilleService.setshowpopup();

  }

}
