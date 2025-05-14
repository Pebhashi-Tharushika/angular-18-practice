import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

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

  constructor(private activedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.product = {
      id: this.activedRoute.snapshot.params['id'],
      name: this.activedRoute.snapshot.params['name']
    }
  }
}

interface Product {
  id: number;
  name: string;
}
