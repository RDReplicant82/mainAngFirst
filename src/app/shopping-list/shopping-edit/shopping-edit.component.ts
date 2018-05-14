import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('ingredientName')
  ingredientName: ElementRef;

  @ViewChild('ingredientAmount')
  ingredientAmount: ElementRef;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  onAddClick() {
    let newIngredient: Ingredient = {
      name: this.ingredientName.nativeElement.value,
      amount: this.ingredientAmount.nativeElement.value
    }
    this.shoppingListService.addIngredient(newIngredient);
  }

}
