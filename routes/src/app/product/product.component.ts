import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router, RouterLink } from '@angular/router';

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

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    // this.product = {
    //   id: this.activatedRoute.snapshot.params['id'],
    //   name: this.activatedRoute.snapshot.params['name']
    // }

    this.activatedRoute.params.subscribe((data: Params) => {
      this.product = {
        id: data['id'],
        name: data['name']
      }
    });

    console.log(this.activatedRoute.snapshot.params);
    console.log(this.activatedRoute.snapshot.queryParams);
    console.log(this.activatedRoute.snapshot.fragment);
  }

  loadSampleProduct() { 
    this.router.navigate(['/product', 1, 'abc'], { // path parameters
      queryParams: {page:1, search:'qwer'},        // query parameters
      fragment: 'loading'                         // fragment
    });
    // this.router.navigateByUrl('/product/1/abc');
  }
}

interface Product {
  id: number;
  name: string;
}
