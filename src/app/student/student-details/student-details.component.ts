import { Component, OnInit } from '@angular/core';
import { Student } from './../../_interface/student.model';
import { Router, ActivatedRoute } from '@angular/router';
import { RepositoryService } from './../../shared/repository.service';
import { ErrorHandlerService } from './../../shared/error-handler.service';
 
@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
  public student!: Student;
  public showSubjects: any;
 
  constructor(private repository: RepositoryService, private router: Router, 
    private activeRoute: ActivatedRoute, private errorHandler: ErrorHandlerService) { }
 
  ngOnInit() {
    this.getStudentDetails();
  }
 
  private getStudentDetails = () =>{
    let id: string = this.activeRoute.snapshot.params['id'];
    let apiUrl: string = `api/student/${id}/subject`;
 
    this.repository.getData(apiUrl)
    .subscribe(res => {
      this.student = res as Student;
    },
    (error) =>{
      this.errorHandler.handleError(error);
    })
  }
}