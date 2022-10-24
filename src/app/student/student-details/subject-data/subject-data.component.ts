import { Component, OnInit, Input } from '@angular/core';
import { Subject } from 'src/app/_interface/subject.model';

@Component({
  selector: 'app-subject-data',
  templateUrl: './subject-data.component.html',
  styleUrls: ['./subject-data.component.css']
})
export class SubjectDataComponent implements OnInit {
  @Input() public subjects: Subject[] | undefined;
 
  constructor() { }
 
  ngOnInit() {
  }
 
}