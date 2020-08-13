import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserDetailsComponent} from "./components/user-details/user-details.component";
import {UserListComponent} from "./components/user-list/user-list.component";

const routes: Routes = [
  {
    path: 'users/:id',
    component: UserDetailsComponent,
  },
  {
    path: '',
    component: UserListComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
