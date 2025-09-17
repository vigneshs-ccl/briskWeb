import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatePickerModule } from 'primeng/datepicker';
import { PaginatorModule } from 'primeng/paginator';
import { Dialog } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { MenuItem } from 'primeng/api';
import { TableModule } from 'primeng/table';
import { MenuModule } from 'primeng/menu';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
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
    Dialog,
    ButtonModule,
    InputTextModule,
    DatePickerModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  templateUrl: './projects.html',
  styleUrls: ['./projects.scss'],
})
export class Projects implements OnInit {
  projects: Project[] = [];
  actionItems: MenuItem[] = [];
  visible: boolean = false;

  ngOnInit(): void {
    this.projects = [
      {
        projectName: 'testing',
        poNumber: 'test123',
        createdBy: 'Vicky',
        createdOn: '2025-08-12',
        client: 'Test Client',
        createdProjectOperation: '1',
        status: 'Active',
        id: '689af115e75ffe5a989fbe17',
      },
      {
        projectName: 'testing',
        poNumber: 'test123',
        createdBy: 'Vicky',
        createdOn: '2025-08-12',
        client: 'Test Client',
        createdProjectOperation: '1',
        status: 'Active',
        id: '689af115e75ffe5a989fbe17',
      },
      {
        projectName: 'testing',
        poNumber: 'test123',
        createdBy: 'Vicky',
        createdOn: '2025-08-12',
        client: 'Test Client',
        createdProjectOperation: '1',
        status: 'Active',
        id: '689af115e75ffe5a989fbe17',
      },
      {
        projectName: 'testing',
        poNumber: 'test123',
        createdBy: 'Vicky',
        createdOn: '2025-08-12',
        client: 'Test Client',
        createdProjectOperation: '1',
        status: 'Active',
        id: '689af115e75ffe5a989fbe17',
      },
      {
        projectName: 'testing',
        poNumber: 'test123',
        createdBy: 'Vicky',
        createdOn: '2025-08-12',
        client: 'Test Client',
        createdProjectOperation: '1',
        status: 'Active',
        id: '689af115e75ffe5a989fbe17',
      },
      {
        projectName: 'testing',
        poNumber: 'test123',
        createdBy: 'Vicky',
        createdOn: '2025-08-12',
        client: 'Test Client',
        createdProjectOperation: '1',
        status: 'Active',
        id: '689af115e75ffe5a989fbe17',
      },
      {
        projectName: 'Lidl-test',
        poNumber: 'Lidl-test',
        createdBy: 'Sudhan',
        createdOn: '2025-07-14',
        client: 'Test Client',
        createdProjectOperation: '1',
        status: 'Active',
        id: '68750fa67cf4086a2784f72b',
      },
      {
        projectName: 'Lidl-test',
        poNumber: 'Lidl-test',
        createdBy: 'Sudhan',
        createdOn: '2025-07-14',
        client: 'Test Client',
        createdProjectOperation: '1',
        status: 'Active',
        id: '68750fa67cf4086a2784f72b',
      },
      {
        projectName: 'Lidl-test',
        poNumber: 'Lidl-test',
        createdBy: 'Sudhan',
        createdOn: '2025-07-14',
        client: 'Test Client',
        createdProjectOperation: '1',
        status: 'Active',
        id: '68750fa67cf4086a2784f72b',
      },
      {
        projectName: 'Lidl-test',
        poNumber: 'Lidl-test',
        createdBy: 'Sudhan',
        createdOn: '2025-07-14',
        client: 'Test Client',
        createdProjectOperation: '1',
        status: 'Active',
        id: '68750fa67cf4086a2784f72b',
      },
      {
        projectName: 'Lidl-test',
        poNumber: 'Lidl-test',
        createdBy: 'Sudhan',
        createdOn: '2025-07-14',
        client: 'Test Client',
        createdProjectOperation: '1',
        status: 'Active',
        id: '68750fa67cf4086a2784f72b',
      },
      {
        projectName: 'Lidl-test',
        poNumber: 'Lidl-test',
        createdBy: 'Sudhan',
        createdOn: '2025-07-14',
        client: 'Test Client',
        createdProjectOperation: '1',
        status: 'Active',
        id: '68750fa67cf4086a2784f72b',
      },
      {
        projectName: 'Lidl-test',
        poNumber: 'Lidl-test',
        createdBy: 'Sudhan',
        createdOn: '2025-07-14',
        client: 'Test Client',
        createdProjectOperation: '1',
        status: 'Active',
        id: '68750fa67cf4086a2784f72b',
      },
      {
        projectName: 'Lidl-test',
        poNumber: 'Lidl-test',
        createdBy: 'Sudhan',
        createdOn: '2025-07-14',
        client: 'Test Client',
        createdProjectOperation: '1',
        status: 'Active',
        id: '68750fa67cf4086a2784f72b',
      },
      {
        projectName: 'sudhan',
        poNumber: 'Lidl-test',
        createdBy: 'Sudhan',
        createdOn: '2025/07/14',
        client: 'Test Client',
        createdProjectOperation: '1',
        status: 'Active',
        id: '68750fa67cf4086a2784f72b',
      },
      {
        projectName: 'vicky',
        poNumber: 'Lidl-test',
        createdBy: 'Sudhan',
        createdOn: '2025-07-14',
        client: 'Test Client',
        createdProjectOperation: '1',
        status: 'Active',
        id: '68750fa67cf4086a2784f72b',
      },
    ];
    this.actionItems = [
      { label: 'Edit', icon: 'pi pi-pencil' },
      { label: 'Delete', icon: 'pi pi-trash' },
    ];
  }

  showDialog() {
    this.visible = true;
  }
}
