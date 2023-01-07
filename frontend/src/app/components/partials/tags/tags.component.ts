import { Component } from '@angular/core';
import { ItemService } from 'src/app/services/item.service';
import { Tag } from 'src/app/shared/models/tag';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent {
  tags?:Tag[];

  constructor(itemService: ItemService) {
    itemService.getAllTags().subscribe(serverTags => {
      this.tags = serverTags;
    });
  }

}
