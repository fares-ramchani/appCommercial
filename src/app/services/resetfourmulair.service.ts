import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ResetfourmulairService {

  private formGroup: FormGroup = new FormGroup({});

  constructor() {}

  // Méthode pour réinitialiser le formulaire
  resetForm() {
    this.formGroup.reset();
  }

  // Getter pour obtenir le formulaire
  getFormGroup() {
    return this.formGroup;
  }
}
