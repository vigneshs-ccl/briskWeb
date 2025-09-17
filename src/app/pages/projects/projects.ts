import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatePickerModule } from 'primeng/datepicker';
import { PaginatorModule } from 'primeng/paginator';

import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { MenuItem } from 'primeng/api';
import { TableModule } from 'primeng/table';
import { MenuModule } from 'primeng/menu';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

export interface Project {
  projectName: string;
  poNumber: string;
  createdBy: string;
  createdOn: string;
  client: string;
  createdProjectOperation: string;
  status: string;
  id: string;
}


@Component({
  selector: 'app-project-table',
  standalone: true,
  imports: [
    CommonModule,
    TableModule,
    MenuModule,
    DialogModule,
    ButtonModule,
    InputTextModule,
    DatePickerModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToastModule,
    ProgressSpinnerModule,
  ],
  templateUrl: './projects.html',
  styleUrls: ['./projects.scss'],
  providers: [MessageService],
})
export class Projects implements OnInit {
  projects: Project[] = [];
  statusOptions = ['Active', 'Inactive'];
  visible: boolean = false;
  actionItems: MenuItem[] = [];
  projectForm!: FormGroup;
  loading = false;
  apiUrl = 'http://localhost:3000/projects';

  // edit and delete
  editMode: boolean = false;
  currentProjectId: string | null = null;
  deleteDialogVisible: boolean = false;
  projectToDelete: Project | null = null;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.loadProjects();

    this.projectForm = this.fb.group({
      projectName: ['', Validators.required],
      poNumber: ['', Validators.required],
      createdBy: ['', Validators.required],
      client: ['', Validators.required],
      createdProjectOperation: ['', Validators.required],
      status: ['', Validators.required],
    });


  }
 getMenuItems(project: any) {
  return [
    {
      label: 'Edit',
      icon: 'pi pi-pencil',
      command: () => this.editProject(project), // Use the row’s project
    },
    {
      label: 'Delete',
      icon: 'pi pi-trash',
      command: () => this.confirmDelete(project),
    },
  ];
}

  loadProjects() {
    this.loading = true;
    this.http.get<Project[]>(this.apiUrl).subscribe((data) => {
      this.projects = data;
      setTimeout(() => (this.loading = false), 800);
    });
  }

  openCreateDialog() {
    this.editMode = false;
    this.visible = true;
    this.projectForm.reset({ status: 'Active' });
  }

  // editing the project
  editProject(project: Project) {
    console.log(project);
    
    this.editMode = true;
    this.currentProjectId = project.id;
    this.visible = true;
    this.projectForm.patchValue(project);
  }

  showDialog() {
    this.visible = true;
  }

  hideDialog() {
    this.visible = false;
    this.projectForm.reset({ status: 'Active' }); // reset form with default status
  }

  submitForm() {
    if (this.projectForm.invalid) {
      this.projectForm.markAllAsTouched();
      return;
    }

    if (this.editMode && this.currentProjectId) {
      // UPDATE existing project
      const updatedProject = {
        ...this.projectForm.value,
        id: this.currentProjectId,
        createdOn: new Date().toISOString().split('T')[0],

      };
     
      
      this.http
        .put<Project>(`${this.apiUrl}/${this.currentProjectId}`, updatedProject)
        .subscribe(() => {
          const index = this.projects.findIndex((p) => p.id === this.currentProjectId);
          this.projects[index] = updatedProject;
          this.visible = false;
          this.messageService.add({
            severity: 'success',
            summary: 'Updated',
            detail: 'Project updated successfully!',
            life: 3000,
          });
        });
    } else {
      const newProject = {
        ...this.projectForm.value,
        createdOn: new Date().toISOString().split('T')[0],
        id: crypto.randomUUID(), // unique ID for db.json
      };

      this.http.post<Project>(this.apiUrl, newProject).subscribe(() => {
        this.visible = false;
        this.loading = true;
        setTimeout(() => {
          this.projects.push(newProject);
          this.loading = false;
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: 'Project added successfully!',
            life: 3000,
          });
        }, 800);
      });
    }
  }

  confirmDelete(project: Project) {
    this.projectToDelete = project;
    this.deleteDialogVisible = true;
  }

  deleteProject() {
  if (!this.projectToDelete) return;

  this.http.delete(`${this.apiUrl}/${this.projectToDelete.id}`).subscribe(() => {
    this.projects = this.projects.filter((p) => p.id !== this.projectToDelete!.id);
    this.deleteDialogVisible = false;
    this.messageService.add({
      severity: 'warn',
      summary: 'Deleted',
      detail: 'Project deleted successfully!',
      life: 3000,
    });
  });
}
}
