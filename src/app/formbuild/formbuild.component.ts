import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-formbuild',
  templateUrl: './formbuild.component.html',
  styleUrls: ['./formbuild.component.css'],
})
export class FormbuildComponent implements OnInit {
  form;
 
  onSubmit() {
    console.log('Reactive form has been submitted');
    console.log(this.form.value);
    
  }
  constructor(private formbuilder: FormBuilder) {
    this.form = this.formbuilder.group({
      "firstname": ["", Validators.required],
      "password": ["", Validators.required],
    })
    
  }

  ngOnInit(): void {}
}
