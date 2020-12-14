import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipesService } from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {
  recipes: Recipe[];

  constructor(private recipesService: RecipesService) { }

  ngOnInit() {
    console.log('ngOnInist')
    // this.recipes = this.recipesService.getAllRecipes();
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter');
    this.recipes = this.recipesService.getAllRecipes();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad');
  }

}
