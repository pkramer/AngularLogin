import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentRoutingModule } from './student-routing/student-routing.module';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentDataComponent } from './student-details/student-data/student-data.component';
import { SubjectDataComponent } from './student-details/subject-data/subject-data.component';
import { StudentCreateComponent } from './student-create/student-create.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [StudentListComponent, StudentDetailsComponent, StudentDataComponent, SubjectDataComponent, StudentCreateComponent],
  imports: [
    CommonModule,
    StudentRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class StudentModule { }