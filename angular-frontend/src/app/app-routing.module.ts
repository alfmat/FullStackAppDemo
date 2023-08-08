import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsListComponent } from './students-list/students-list.component';
import { ProfessorListComponent } from './professor-list/professor-list.component';
import { CourseListComponent } from './course-list/course-list.component';

const routes: Routes = [
  {path: '', component: StudentsListComponent},
  {path: 'professors', component: ProfessorListComponent},
  {path: 'courses', component: CourseListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
