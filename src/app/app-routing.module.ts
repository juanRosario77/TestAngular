import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeCreateComponent } from './views/employee-create/employee-create.component';
import { EmployeeEditComponent } from './views/employee-edit/employee-edit.component';
import { EmployeeListComponent } from './views/employee-list/employee-list.component';
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'create-employee' },
  { path: 'create-employee', component: EmployeeCreateComponent },
  { path: 'employees-list', component: EmployeeListComponent },
  { path: 'employee-edit/:id', component: EmployeeEditComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}