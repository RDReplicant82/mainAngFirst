import { Ingredient } from "../shared/ingredient.model";
import { EventEmitter } from "@angular/core";

export class ShoppingListService {

    ingredientAdded: EventEmitter<Ingredient[]> = new EventEmitter<Ingredient[]>();

    private ingredients: Ingredient [] = [
        new Ingredient('masa', 200),
        new Ingredient('crema', 50)
      ];

      getIngredients() {
        return this.ingredients.slice();
      }

      addIngredient(newIngredient: Ingredient) {
        this.ingredients.push(newIngredient);
        this.ingredientAdded.emit(this.ingredients.slice());
      }

      addIngredients(ingredient: Ingredient[]) {
        this.ingredients.push(...ingredient);
        this.ingredientAdded.emit(this.ingredients.slice());
      }
}