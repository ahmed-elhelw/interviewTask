import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private SearchProductSubject = new BehaviorSubject<string>('');
  SearchProductAction$ = this.SearchProductSubject.asObservable();

  constructor() { }

  sendSearchResult(searachResult:any): void {
    let SearchProducts = searachResult;
    this.SearchProductSubject.next(SearchProducts);
    console.log(SearchProducts);
  }

}
