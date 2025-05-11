import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators, FormArray, FormBuilder, Form } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent /* implements OnInit */ {

  title = 'reactive-form';

  signUpForm !: FormGroup;

  restrictedNames = ['admin', 'manager'];

  constructor(private fb: FormBuilder) {
    this.signUpForm = this.fb.group({
      'userData': this.fb.group({
        // we used 'this' keyword to access the class properties in the sync validator
        // so we need to use bind(this) to bind the 'this' keyword to the current instance of the class
        'username': [null, [Validators.required, Validators.minLength(3), Validators.maxLength(10), this.isRestrictedName.bind(this)]],
        // no need to use bind(this) because async validator hasn't used the 'this' keyword to refer the current instance of the class
        'email': [null, [Validators.required, Validators.email], this.isRestrictedEmails]
      }),
      'address': [null, Validators.required],
      'phone': [null, [Validators.required, Validators.pattern('^\\d{3}-\\d{7}$')]],
      'hobbies': this.fb.array([])
    });


    /* ------------ EventEmitter - valueChanges ------------ */

    // for entire form
    this.signUpForm.valueChanges.subscribe((value) => {
      console.log('valueChanges: ', value);
    }
    );

    // only for username
    this.signUpForm.get('userData.username')?.valueChanges.subscribe((value) => {
      console.log('username valueChanges: ', value);
    }
    );



    /* -------------- EventEmitter - statusChanges ------------- */

    // for entire form
    this.signUpForm.statusChanges.subscribe((status) => {
      console.log('statusChanges: ', status);
    }
    );

    // only for phone
    this.signUpForm.get('phone')?.statusChanges.subscribe((status) => {
      console.log('phone statusChanges: ', status);
    }
    );


    /* -------------- setValue vs patchValue ------------- */

    // this.signUpForm.setValue({
    //   userData: {
    //     username: 'Amal',
    //     email: 'amal@gmail.com'
    //   },
    //   address: 'Colombo',
    //   phone: '077-1234567',
    //   hobbies: []
    // });

    this.signUpForm.patchValue({
      userData: {
        username: 'Amal'
      },
      address: 'Colombo',
      phone: '077-1234567'
    });
  }

  // ngOnInit(): void {
  //   this.signUpForm = new FormGroup({
  //     'username': new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
  //     'email': new FormControl(null, [Validators.required, Validators.email]),
  //     'address': new FormControl(null,Validators.required),
  //     'phone': new FormControl(null, [Validators.required, Validators.pattern('^\\d{3}-\\d{7}$')])
  //   });
  // }

  // ngOnInit(): void {
  //   this.signUpForm = new FormGroup({
  //     'userData': new FormGroup({
  //       'username': new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
  //       'email': new FormControl(null, [Validators.required, Validators.email])
  //     }),
  //     'address': new FormControl(null, Validators.required),
  //     'phone': new FormControl(null, [Validators.required, Validators.pattern('^\\d{3}-\\d{7}$')]),
  //     'hobbies': new FormArray([])
  //   });
  // }

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

  // sync validator
  isRestrictedName(control: FormControl): { [s: string]: boolean } | null {
    if (this.restrictedNames.indexOf(control.value?.toLowerCase()) !== -1) {
      return { 'restrictedName': true };
    }
    return null;
  }

  // async validator
  isRestrictedEmails(control: FormControl): Promise<any> {
    const promise = new Promise((resolve, reject) => {
      // Imagine a backend call here. So we need to use setTimeout to simulate a delay
      setTimeout(() => {
        if (control.value === 'admin@gmail.com') {
          resolve({ 'restrictedEmail': true });
        } else {
          resolve(null);
        }
      }, 2000);
    });
    return promise;
  }

  //reset form data
  resetData() {
    this.signUpForm.reset();
  }
}
