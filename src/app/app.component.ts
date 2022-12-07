import { Component } from '@angular/core';
import { SearchService } from './search-service/search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'interviewTask';

  constructor(private searchService: SearchService ) {
  }

  onChangeSearch(event:any): void {
    let SearchedProduct = event.target.value;
    this.searchService.sendSearchResult(SearchedProduct);
  }

}
