import { Injectable } from '@angular/core';
import { sample_items } from 'src/data';
import { Item } from '../shared/models/items';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor() { }

  // for now we are using the hard coded items in here, In future this will be connected with the Express, Node and Mongo
  getAll():Item[] {
    return sample_items;
  }
}
