import { Component } from '@angular/core';
import { ShowComposantsupprimermagasinService } from 'src/app/services/show-composantsupprimermagasin.service';

@Component({
  selector: 'app-supprimermagasin',
  templateUrl: './supprimermagasin.component.html',
  styleUrls: ['./supprimermagasin.component.css']
})
export class SupprimermagasinComponent {
  constructor(private ShowComposantsupprimermagasinService: ShowComposantsupprimermagasinService){}
  closepopup() {
    this.ShowComposantsupprimermagasinService.setshowpopup();

  }
}
