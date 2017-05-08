import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Component } from '@angular/core';

@Component({
  selector: 'form-validation',
  templateUrl: './formvalidation.component.html'
})
export class FormvalidationComponent {
  complexForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.complexForm = fb.group({
      'firstName' : [null, Validators.required],
      'lastName' : [null, Validators.required],
      'userName' : [null, Validators.required],
      'password' : [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(10)])],
      'gender' : [null, Validators.required]
    })
   }

   submitForm(value: any){
     console.log(value);
   }
}
