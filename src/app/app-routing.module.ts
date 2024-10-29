import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompaniaComponent } from './compania/compania.component';

const routes: Routes = [
  { path: 'tabla', component: CompaniaComponent },
  { path: '', redirectTo: '/tabla', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
