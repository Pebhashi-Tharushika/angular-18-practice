import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-user',
  standalone: true,
  imports: [],
  templateUrl: './edit-user.component.html',
  styleUrl: './edit-user.component.css'
})
export class EditUserComponent implements OnInit {

  @Input() id !: number;

  constructor() {
    // console.log(this.id); //undefined
  }

  ngOnInit(): void {
    console.log(this.id); // 1
  }

}
