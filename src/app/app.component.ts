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
  // form = new FormGroup({
  //   firstname: new FormControl('', Validators.required),
  //   password: new FormControl('', Validators.required),
  // });

  constructor(formbuilder: FormBuilder) {}
}
