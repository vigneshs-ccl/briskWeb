// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

// export interface Project {
//   projectName: string;
//   poNumber: string;
//   createdBy: string;
//   createdOn: string;
//   client: string;
//   createdProjectOperation: string;
//   status: string;
//   id: string;
// }

// @Injectable({
//   providedIn: 'root'
// })
// export class ProjectsService {
//   private apiUrl = 'http://localhost:3000/projects'; //  JSON Server endpoint

//   constructor(private http: HttpClient) {}

//   getProjects(): Observable<Project[]> {
//     return this.http.get<Project[]>(this.apiUrl);
//   }

//   addProject(project: Project): Observable<Project> {
//     return this.http.post<Project>(this.apiUrl, project);
//   }

//   deleteProject(id: string): Observable<void> {
//     return this.http.delete<void>(`${this.apiUrl}/${id}`);
//   }
// }