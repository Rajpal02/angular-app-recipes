import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    {name: 'A Test Recipe', description:
    'This is a test Recipe',
    imagePath: `https://www.littlesweetbaker.com/wp-content/uploads/2016/12/christmas-crack-1.jpg`,
  ingredients: [
    {name: "Chocolate", amount: 3},
    {name: "Cashew", amount: 10}
]},
    {name: 'Another Test Recipe',
    description: 'This is a simple Recipe',
    imagePath: `https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/132842.jpg?output-format=auto&output-quality=auto`,
    ingredients: [
      {name: "Bread", amount: 5},
      {name: "Cheese", amount: 2}
  ]}
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

}
