import { ChangePasswordComponent } from './change-password.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [{
  path: '', component: ChangePasswordComponent,
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForgetPasswordRoutingModule { }
