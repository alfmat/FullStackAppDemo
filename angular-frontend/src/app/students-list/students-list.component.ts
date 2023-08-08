import { Component } from '@angular/core';
import { StudentService } from '../service/student.service';
import { Student } from '../interface/student';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent {

  studentList: Student[] = []

  constructor(private studentService: StudentService) {}

  ngOnInit() {
    this.studentService.getStudents().subscribe((data:Student[]) => {
      this.studentList = data;
    })
  }
}
