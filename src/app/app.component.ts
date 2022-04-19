import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'reactiveForms';
  contactForm;
  constructor( private formbuilder: FormBuilder) {
    this.contactForm= this.formbuilder.group({
      firstname:["", [Validators.required, Validators.minLength(5)]],
      email:["", [Validators.required, Validators.email]],
      gender:["", [Validators.required]]
    })
  }
  get firstname() {
     return this.contactForm.get('firstname');
  }
  get email(){
    return this.contactForm.get("email")
  }
  get gender() {
    return this.contactForm.get("gender");
  }
  onSubmit() {
    console.log(this.contactForm.value);
    
  }
  reset(){
    this.contactForm.reset()
  }
}
