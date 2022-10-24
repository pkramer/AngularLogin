import { RepositoryService } from './../../shared/repository.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { StudentForCreation } from '../../_interface/studentForCreation.model';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { SuccessDialogComponent } from 'src/app/shared/dialogs/success-dialog/success-dialog.component';
import { ErrorHandlerService } from '../../shared/error-handler.service';
 
@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css']
})
export class StudentCreateComponent implements OnInit {
  public studentForm!: FormGroup;
  private dialogConfig: MatDialogConfig<any> | undefined;
 
  constructor(private location: Location, private repository: RepositoryService, private dialog: MatDialog, private errorService: ErrorHandlerService) { }
 
  ngOnInit() {
    this.studentForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.maxLength(60)]),
      dateOfBirth: new FormControl(new Date()),
      address: new FormControl('', [Validators.required, Validators.maxLength(100)])
    });

    this.dialogConfig = {
      height: '200px',
      width: '400px',
      disableClose: true,
      data: { }
    }
  }
 
  public hasError = (controlName: string, errorName: string) =>{
    return this.studentForm.controls[controlName].hasError(errorName);
  }
 
  public onCancel = () => {
    this.location.back();
  }
 
  public createStudent = (studentFormValue: any) => {
    if (this.studentForm.valid) {
      this.executeStudentCreation(studentFormValue);
    }
  }
 
  private executeStudentCreation = (studentFormValue: any) => {
    let student: StudentForCreation = {
      name: studentFormValue.name,
      dateOfBirth: studentFormValue.dateOfBirth,
      address: studentFormValue.address
    }
 
    let apiUrl = 'api/student';
    this.repository.create(apiUrl, student)
      .subscribe(res => {
        let dialogRef = this.dialog.open(SuccessDialogComponent, this.dialogConfig);
 
        //we are subscribing on the [mat-dialog-close] attribute as soon as we click on the dialog button
        dialogRef.afterClosed()
          .subscribe(result => {
            this.location.back();
          });
      },
      (error => {
          this.errorService.dialogConfig = { ...this.dialogConfig };
          this.errorService.handleError(error);
      })
    )
  }
 
}