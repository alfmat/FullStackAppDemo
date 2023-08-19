import { Injectable } from '@angular/core';
import { Student } from '../interface/student';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  constructor(private httpClient: HttpClient) { }

  getStudents(): Observable<Student[]> {
    return this.httpClient.get<Student[]>('http://localhost:3000/students', {responseType: 'json'}).pipe(map((data: any) => data.body))
  }

  getStudent(id: string): Observable<Student> {
    return this.httpClient.get<Student>('http://localhost:3000/students/' + id, {responseType: 'json'}).pipe(map((data: any) => data.body))
  }
}
