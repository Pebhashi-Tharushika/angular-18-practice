import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators, FormArray } from '@angular/forms';

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

  // ngOnInit(): void {
  //   this.signUpForm = new FormGroup({
  //     'username': new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
  //     'email': new FormControl(null, [Validators.required, Validators.email]),
  //     'address': new FormControl(null,Validators.required),
  //     'phone': new FormControl(null, [Validators.required, Validators.pattern('^\\d{3}-\\d{7}$')])
  //   });
  // }

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
        'email': new FormControl(null, [Validators.required, Validators.email])
      }),
      'address': new FormControl(null, Validators.required),
      'phone': new FormControl(null, [Validators.required, Validators.pattern('^\\d{3}-\\d{7}$')]),
      'hobbies': new FormArray([])
    });
  }

  onSubmit() {
    console.log(this.signUpForm);
  }

  get isInvalidUsername() {
    return this.signUpForm.get('userData.username')?.invalid && this.signUpForm.get('userData.username')?.touched;
  }

  get isInvalidEmail() {
    return this.signUpForm.get('userData.email')?.invalid && this.signUpForm.get('userData.email')?.touched;
  }

  get isInvalidAddress() {
    return this.signUpForm.get('address')?.invalid && this.signUpForm.get('address')?.touched;
  }

  get isInvalidPhone() {
    return this.signUpForm.get('phone')?.invalid && this.signUpForm.get('phone')?.touched;
  }

  OnAddHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signUpForm.get('hobbies'))?.push(control);
  }

  get hobbiesControls() {
    return (<FormArray>this.signUpForm.get('hobbies')).controls;
  }

  isInvalidHobby(index: number) {
    return (<FormArray>this.signUpForm.get('hobbies')).controls[index].invalid && (<FormArray>this.signUpForm.get('hobbies')).controls[index].touched;
  }
}
