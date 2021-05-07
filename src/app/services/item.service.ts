import { Injectable } from '@angular/core';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  items: Item[] = [
    {
      id: 0,
      title: 'Manzana',
      price: 1400,
      quantity: 1,
      completed: false
    },
    {
      id: 1,
      title: 'Banano',
      price: 200,
      quantity: 2,
      completed: true
    }
  ];

  constructor() { }

  getItems(){
    return this.items;
  }

  addItem(item: Item){
    this.items.unshift(item);
  }
}
