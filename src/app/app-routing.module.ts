import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskiliciousComponent } from './components/taskilicious/taskilicious.component';


const routes: Routes = [
  {
    path: '',
    component: TaskiliciousComponent,
    pathMatch: 'full'
  },
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
