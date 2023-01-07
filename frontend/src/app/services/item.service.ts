import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { sample_items, sample_tags } from 'src/data';
import { ITEMS_BY_ID, ITEMS_BY_SEARCH_URL, ITEMS_BY_TAG_URL, ITEMS_TAGS_URL, ITEMS_URL } from '../shared/constants/urls';
import { Item } from '../shared/models/items';
import { Tag } from '../shared/models/tag';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http:HttpClient) { }

  // for now we are using the hard coded items in here, In future this will be connected with the Express, Node and Mongo
  getAll():Observable<Item[]> {
    return this.http.get<Item[]>(ITEMS_URL);
  }

  getAllItemsBySearchTerm(searchTerm: string) {
    // in here modify this to get items from the tag
    return this.http.get<Item[]>(ITEMS_BY_SEARCH_URL + searchTerm);
    //return this.getAll().filter(item => item.name.toLowerCase().includes(searchTerm.toLocaleLowerCase()))
  }

  getItemById(itemId: String):Observable<Item> {
    return this.http.get<Item>(ITEMS_BY_ID + itemId)

  }

  getAllTags(): Observable<Tag[]> {
    return this.http.get<Tag[]>(ITEMS_TAGS_URL)
  }

  getAllItemsByTag(tag:string): Observable<Item[]> {
    return tag ==="All"?
    this.getAll():
    this.http.get<Item[]>(ITEMS_BY_TAG_URL + tag)
  }
}
