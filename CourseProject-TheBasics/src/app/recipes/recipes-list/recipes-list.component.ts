import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
   recipes: Recipe[] = [
    new Recipe('A test Recipe','This is a simply a test','https://www.simplyrecipes.com/thmb/KRw_r32s4gQeOX-d07NWY1OlOFk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Homemade-Pizza-Dough-Lead-Shot-1c-c2b1885d27d4481c9cfe6f6286a64342.jpg'),
    new Recipe('A test Recipe2','This is a simply a test2','https://assets.epicurious.com/photos/62f16ed5fe4be95d5a460eed/4:6/w_3087,h_4631,c_limit/RoastChicken_RECIPE_080420_37993.jpg'),
    new Recipe('A test Recipe3','This is a simply a test3','https://www.allrecipes.com/thmb/O84MQ6KTV8LpOOUp2FfFHD-yJL8=/2000x2000/filters:no_upscale()/45396-easy-pancakes-mfs-36-b720f5b89f854d01b9d0e92661fa4c2d.jpg'),

   ];
  constructor() { }

  ngOnInit(): void {
  }

}
