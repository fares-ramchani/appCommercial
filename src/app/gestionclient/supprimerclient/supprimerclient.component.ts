import { Component } from '@angular/core';
import { ShowComposantsupprimerclientService } from 'src/app/services/show-composantsupprimerclient.service';

@Component({
  selector: 'app-supprimerclient',
  templateUrl: './supprimerclient.component.html',
  styleUrls: ['./supprimerclient.component.css']
})
export class SupprimerclientComponent {
  constructor(private ShowComposantsupprimerclientService: ShowComposantsupprimerclientService){}
  closepopup() {
    this.ShowComposantsupprimerclientService.setshowpopup();

  }

}
