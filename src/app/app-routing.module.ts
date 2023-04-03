import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmploeeRegComponent } from './emploee-reg/emploee-reg.component';

const routes: Routes = [
  {path:"",redirectTo:"register",pathMatch:"full"},
   {path:"register",component:EmploeeRegComponent}
   
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
