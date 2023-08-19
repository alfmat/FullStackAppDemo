import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsListComponent } from './students-list/students-list.component';
import { ProfessorListComponent } from './professor-list/professor-list.component';
import { CourseListComponent } from './course-list/course-list.component';
import { StudentDetailsComponent } from './student-details/student-details.component';

const routes: Routes = [
  {path: 'students', component: StudentsListComponent},
  {path: 'professors', component: ProfessorListComponent},
  {path: 'courses', component: CourseListComponent},
  {path: '', redirectTo: '/students', pathMatch: 'full'},
  {path: 'studentDetail/:id', component: StudentDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
