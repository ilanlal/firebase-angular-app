import { createComponent, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompletionComponent } from './completion/completion.component';

/**
 * This is the routing module for the application.
 */
const routes: Routes = [
  { path:'completion', component:CompletionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
