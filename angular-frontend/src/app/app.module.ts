import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { StudentsListComponent } from './students-list/students-list.component';
import { ProfessorListComponent } from './professor-list/professor-list.component';
import { CourseListComponent } from './course-list/course-list.component';
import { HttpClientModule } from '@angular/common/http';
import { StudentDetailsComponent } from './student-details/student-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    StudentsListComponent,
    ProfessorListComponent,
    CourseListComponent,
    StudentDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
