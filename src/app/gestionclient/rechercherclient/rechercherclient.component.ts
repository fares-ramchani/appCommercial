import { Component } from '@angular/core';
import { ShowComposantrechercherclientService } from 'src/app/services/show-composantrechercherclient.service';

@Component({
  selector: 'app-rechercherclient',
  templateUrl: './rechercherclient.component.html',
  styleUrls: ['./rechercherclient.component.css']
})
export class RechercherclientComponent {
  constructor(private ShowComposantrechercherclientService:ShowComposantrechercherclientService){}
  closepopup() {
    this.ShowComposantrechercherclientService.setshowpopup();

  }

}
