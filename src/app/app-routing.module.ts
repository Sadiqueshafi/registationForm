import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistationFormComponent } from './StudentRegistation/registation-form/registation-form.component';

const routes: Routes = [{
  path: 'login',
  component: LoginComponent
},
{ path: '', redirectTo: '/login', pathMatch: 'full' },
  {path: 'registationform', component: RegistationFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
