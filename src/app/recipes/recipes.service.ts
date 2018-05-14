import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

    constructor(private  shoppingListService: ShoppingListService){}

    recipeSelected = new EventEmitter<Recipe>();

    recipes: Recipe [] = [
        new Recipe(
            'Pepito de crema', 
            'Pepito relleno de crema descripción', 
            'http://www.cocinaabuenashoras.com/files/pepitos-crema-super-rapidos-3.jpg',
            [
                new Ingredient('Azucar', 32),
                new Ingredient('Harina', 29),
                new Ingredient('Leche', 1)
            ]
        ),
        new Recipe(
            'Almejas en salsa verde', 
            'Almejas en salsa verde descripción', 
            'http://www.canalcocina.es/medias/images/1104_CocinaVascaII_AlcachofasAlmejasSalsaVerde.jpg',
            [
                new Ingredient('Almejas', 12),
                new Ingredient('Vino blanco', 2),
                new Ingredient('Cebolla', 2)
            ])
      ];

      getRecipes() {
          return this.recipes.slice();
      }

      toShopList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
      }
}