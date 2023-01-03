import { Component } from '@angular/core';
import { ItemService } from 'src/app/services/item.service';
import { Item } from 'src/app/shared/models/items';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  items:Item[] = [];

  constructor(private itemService:ItemService) {
    this.items = itemService.getAll();
  }
}
