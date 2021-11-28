import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ShoppingListComponent} from "./shopping-list/shopping-list.component";

import {RecipesComponent} from "./recipes/recipes.component";
import {RecipeDetailComponent} from "./recipes/recipe-detail/recipe-detail.component";
import {RecipeStartComponent} from "./recipes/recipe-start/recipe-start.component";

export const routes: Routes = [
  {path: '', component: ShoppingListComponent},
  {
    path: 'recipe', component: RecipesComponent, children: [
      {path: '', component: RecipeStartComponent},
      {path: ':id', component: RecipeDetailComponent}
    ]
  },
  {path: 'shopping-list', component: ShoppingListComponent},
  {path: '**', redirectTo: ''}

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
