import { Student } from './../../../_interface/student.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
 
@Component({
  selector: 'app-student-data',
  templateUrl: './student-data.component.html',
  styleUrls: ['./student-data.component.css']
})
export class StudentDataComponent implements OnInit {
  @Input() public student: Student | undefined;
  public selectOptions = [{name:'Show', value: 'show'}, {name: `Don't Show`, value: ''}];
  @Output() selectEmitt = new EventEmitter();
 
  constructor() { }
 
  ngOnInit() {
  }
 
  public onChange = (event: any) => {
    this.selectEmitt.emit(event.value);
  }
 
}