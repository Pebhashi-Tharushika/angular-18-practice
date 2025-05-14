import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {

  id:number = 0;

  constructor(private activedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    // console.log(this.activedRoute.snapshot.params['id']);
    this.id = this.activedRoute.snapshot.params['id'];
  }
}
