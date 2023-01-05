import { Injectable } from '@angular/core';
import { sample_items, sample_tags } from 'src/data';
import { Item } from '../shared/models/items';
import { Tag } from '../shared/models/tag';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor() { }

  // for now we are using the hard coded items in here, In future this will be connected with the Express, Node and Mongo
  getAll():Item[] {
    return sample_items;
  }

  getAllItemsBySearchTerm(searchTerm: string) {
    // in here modify this to get items from the tag
    return this.getAll().filter(item => item.tag.includes(searchTerm.toLocaleLowerCase()))
    //return this.getAll().filter(item => item.name.toLowerCase().includes(searchTerm.toLocaleLowerCase()))
  }

  getItemById(itemId: String):Item {
    return this.getAll().find(item => item.id == itemId) ?? new Item();

  }

  getAllTags(): Tag[] {
    return sample_tags
  }

  getAllItemsByTag(tag:string): Item[] {
    return tag ==="All"?
    this.getAll():
    this.getAll().filter(item => item.tag?.includes(tag))
  }
}
