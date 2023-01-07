import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ItemService } from 'src/app/services/item.service';
import { Item } from 'src/app/shared/models/items';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  items:Item[] = [];

  constructor(private itemService:ItemService, activatedRoute:ActivatedRoute) {
    let itemObservable:Observable<Item[]>;
    activatedRoute.params.subscribe((params) => {
      if(params.searchTerm) {
        itemObservable = this.itemService.getAllItemsBySearchTerm(params.searchTerm)
      }
      else if(params.tag) {
        itemObservable = this.itemService.getAllItemsByTag(params.tag);
      }
      else {
        itemObservable = itemService.getAll();
      }

      itemObservable.subscribe((serverItems) => {
        this.items = serverItems;
      })

    })

  }
}
