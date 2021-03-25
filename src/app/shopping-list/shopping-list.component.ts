import { Component, OnInit } from '@angular/core';
import {Ingredient} from '../shared/ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  // @ts-ignore
  ingredients: Ingredient[ ] = [
    new Ingredient('apples', 5),
    new Ingredient('tomato', 3),
    new Ingredient('beans', 7),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
