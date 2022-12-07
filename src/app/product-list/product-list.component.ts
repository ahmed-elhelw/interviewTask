import { Component } from '@angular/core';
import { BehaviorSubject, catchError, combineLatest, EMPTY, map } from 'rxjs';
import { ProductCategoryService } from '../product-category/product-category.service';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  //p is used for pagination
  p: number = 1;
  errorMessage = '';
  checkedIdx = -1;


  private SelectedCategorySubject = new BehaviorSubject<string>('');
  SelectedCategoryAction$ = this.SelectedCategorySubject.asObservable();




  products$ = this.productService.products$

  categories$ = this.productCategoryService.categories$
  .pipe(
    catchError(err =>{
       this.errorMessage = err;
       return EMPTY;
      })
  );


  filteredProducts$ = combineLatest([
    this.products$,
    this.SelectedCategoryAction$,
  ]).pipe(
      map(([products, selectedCatId]) =>
        products.filter((product:any) =>
          selectedCatId? product.category === selectedCatId : true,
        )),
      catchError(err =>{
        this.errorMessage = err;
        return EMPTY;
      })
    );



  constructor(private productService: ProductService,
    private productCategoryService: ProductCategoryService) {
  }

  onChangeCategory(event:any): void {
    let categoryName = event.target.value
    this.SelectedCategorySubject.next(categoryName);
    console.log(event.target.value);
    console.log(event.target.checked);
  }

}
