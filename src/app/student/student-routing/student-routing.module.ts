import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { StudentListComponent } from '../student-list/student-list.component';
import { StudentDetailsComponent } from '../student-details/student-details.component';
import { StudentCreateComponent } from '../student-create/student-create.component';
 
const routes: Routes = [
  { path: '', component: StudentListComponent },
  { path: 'details/:id', component: StudentDetailsComponent },
  { path: 'create', component: StudentCreateComponent }
];
 
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class StudentRoutingModule { }