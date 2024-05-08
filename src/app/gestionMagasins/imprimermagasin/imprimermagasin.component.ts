import { Component } from '@angular/core';
import { ShowComposantimprimermagasinService } from 'src/app/services/show-composantimprimermagasin.service';

@Component({
  selector: 'app-imprimermagasin',
  templateUrl: './imprimermagasin.component.html',
  styleUrls: ['./imprimermagasin.component.css']
})
export class ImprimermagasinComponent {
  constructor(private ShowComposantimprimermagasinService: ShowComposantimprimermagasinService){}
  closepopup() {
    this.ShowComposantimprimermagasinService.setshowpopup();

  }
}
