import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent{
complexForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.complexForm = fb.group({
      'userName' : [null, Validators.required],
      'password' : [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(10)])]
    })
   }

   submitForm(value: any){
     console.log(value);
   }

}
