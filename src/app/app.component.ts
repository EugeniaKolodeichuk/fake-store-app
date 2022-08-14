import { Component, OnInit } from '@angular/core';
import { IProduct } from './models/product';
import { ProductsService } from './services/products.service';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public title = 'Angular Store';
  public loading = false;
  public products$: Observable<IProduct[]>;
  public term = '';

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.loading = true;
    this.products$ = this.productsService.getAll()
      .pipe(
        tap(() => this.loading = false)
      );
    /* more modern variant of code below 

      public products: IProduct[] = [];

      this.productsService.getAll().subscribe(
      products => {
        this.products = products;
        this.loading = false;
      }
    ) */
  }
}
