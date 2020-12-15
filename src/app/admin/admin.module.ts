import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {AdminLayoteComponent} from './shared/components/admin-layote/admin-layote.component';
import {LoginPageComponent} from './login-page/login-page.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {CreatePageComponent} from './create-page/create-page.component';
import {EditPageComponent} from './edit-page/edit-page.component';

@NgModule({
  declarations: [AdminLayoteComponent, LoginPageComponent, DashboardComponent, CreatePageComponent, EditPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '', component: AdminLayoteComponent, children: [
          {path: '', redirectTo: '/admin/login', pathMatch: 'full'},
          {path: 'login', component: LoginPageComponent},
          {path: 'create', component: CreatePageComponent},
          {path: 'dashboard', component: DashboardComponent},
          {path: 'post/:id/edit', component: EditPageComponent},
        ]
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AdminModule {

}