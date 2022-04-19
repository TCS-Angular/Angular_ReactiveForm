import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reactiveForms';
  form = new FormGroup({
    "firstname": new FormControl("",Validators.required),
    "password": new FormControl("",Validators.required),
  })

  onSubmit() {
    console.log("Reactive form has been submitted");
    console.log(this.form.value);
    
    
  }
}
