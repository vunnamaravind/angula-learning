import { Component, OnInit } from '@angular/core';

import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent implements OnInit {
  // @ts-ignore
  recipes: Recipe[] = [
    new Recipe('cold-coffee', 'this a simple drink ',
      'https://www.homegrounds.co/wp-content/uploads/2019/09/178514_' +
      'HealthyCinnamonCoffee_031318.png'),

    new Recipe('cold-coffee', 'this a simple drink ',
      'https://www.homegrounds.co/wp-content/uploads/2019/09/178514_' +
      'HealthyCinnamonCoffee_031318.png')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
