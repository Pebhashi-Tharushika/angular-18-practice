import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, RouterLink } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  // Import RouterLink for navigation & Import JsonPipe to display JSON data in the template
  imports: [JsonPipe, RouterLink], 
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {

  product!: Product;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    // this.product = {
    //   id: this.activatedRoute.snapshot.params['id'],
    //   name: this.activatedRoute.snapshot.params['name']
    // }

    this.activatedRoute.params.subscribe((data:Params) => {
      this.product = {
        id: data['id'],
        name: data['name']
      }
    });
  }
  
}

interface Product {
  id: number;
  name: string;
}
