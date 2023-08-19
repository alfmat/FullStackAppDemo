import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Professor } from '../interface/professor';

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {

  constructor(private httpClient: HttpClient) { }

  getStudents(): Observable<Professor[]> {
    return this.httpClient.get<Professor[]>('http://localhost:3000/professors', {responseType: 'json'}).pipe(map((data: any) => data.body))
  }
}
