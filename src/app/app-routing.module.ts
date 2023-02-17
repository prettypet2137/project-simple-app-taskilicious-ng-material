import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriesComponent } from './components/categories/categories.component';
import { CategoryAddComponent } from './components/category-add/category-add.component';


const routes: Routes = [
  { path: '', component: CategoriesComponent, pathMatch: 'full' },
  { path: 'categories/create', component: CategoryAddComponent },
  // Fallback when no prior routes is matched
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      relativeLinkResolution: 'legacy'
    })
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
