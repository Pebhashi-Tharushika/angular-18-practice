import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms'; // import NgForm

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule], // import FormsModule to use ngForm in <form></form>
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  @ViewChild('f') form !: NgForm

  title = 'td-forms';

  onSubmit() {
    console.group("Form submitted");

    console.log(this.form);
    console.log(this.form.value.name);
    console.log(this.form.value.email);
    console.log(this.form.value.address);
  }

  // onSubmit(event: any) {
  //   // event.preventDefault();
  //   console.group("Form submitted");
  //   console.log(event); //ngModel object
  //   console.log(event.value.name);
  //   console.log(event.value.email);
  //   console.log(event.value.address);

  //   // console.log(event.target[0].value);
  //   // console.log(event.target[1].value);
  //   // console.log(event.target[2].value);

  //   // console.log(event.target.name.value);
  //   // console.log(event.target.email.value);
  //   // console.log(event.target.address.value);
  // }
}
