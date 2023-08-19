import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../service/student.service';
import { Student } from '../interface/student';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent {
  constructor(
    private route: ActivatedRoute, 
    private studentService: StudentService,
    private router: Router
  ) { }

  student: Student = {
    _id: '',
    name: '',
    degree: '',
    major: '',
    gpa: 3,
    address: '',
    courses: []
  };

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id != null) {
      this.studentService.getStudent(id).subscribe((data: any) => {
        console.log(data);
        this.student = data[0];
      })
    }
  }

  onBack() {
    this.router.navigate(['/students']);
  }
}
