import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  
  title = 'reactive-form';

  signUpForm !: FormGroup;

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      'username': new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
      'email': new FormControl(null),
      'address': new FormControl(null),
    });
  }

  onSubmit() {
    console.log(this.signUpForm);
  }

  get isInvalidUsername(){
    return this.signUpForm.get('username')?.invalid && this.signUpForm.get('username')?.touched;
  }
}
