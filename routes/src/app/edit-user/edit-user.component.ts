import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-edit-user',
  standalone: true,
  imports: [],
  templateUrl: './edit-user.component.html',
  styleUrl: './edit-user.component.css'
})
export class EditUserComponent implements OnChanges {

  @Input() id !: number;

  constructor() {
    // console.log(this.id); //undefined
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['id']) {
      console.log(this.id);
    }
  }

  // ngOnInit(): void {
  //   console.log(this.id); // 1
  // }

}
