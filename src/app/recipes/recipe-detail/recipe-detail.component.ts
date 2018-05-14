import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input()
  recipeDataDetail: Recipe;
  menuIsOpen: boolean = false;

  constructor(private  recipeService: RecipeService) { }

  ngOnInit() {
  }

  toggleMenu() {
    this.menuIsOpen = !this.menuIsOpen;
  }

  addToShoppingList() {
    this.recipeService.toShopList(this.recipeDataDetail.ingredients);
  }

}
