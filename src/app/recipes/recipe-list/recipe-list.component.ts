import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  
  recipes: Recipe[] = [
    new Recipe(
      'A test recipe',
      'This is simply test',
      'https://www.tasteofhome.com/wp-content/uploads/2018/01/Meatball-Alphabet-Soup_EXPS_SSMZ20_22243_E10_10_2b.jpg?resize=768,768'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
