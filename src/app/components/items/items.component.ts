import { Component, OnInit } from '@angular/core';
import { Item } from '../../models/item';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items: Item[] = [];

  constructor() { }

  ngOnInit(): void {
    this.items = [
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
  }

  deleteItem(item: Item){
    this.items = this.items.filter(x => x.id !== item.id);
  }

}
