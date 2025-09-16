import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { PaginatorModule } from 'primeng/paginator';
import { Dialog } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { AvatarModule } from 'primeng/avatar';


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
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    MatButtonModule,
    MatIconModule,
    PaginatorModule,
    Dialog,
    ButtonModule,
    InputTextModule,
    AvatarModule
  ],
  templateUrl: './projects.html',
  styleUrls: ['./projects.scss']
})
export class Projects implements OnInit {
  displayedColumns: string[] = [
    'sno',
    'projectName',
    'poNumber',
    'createdBy',
    'client',
    'createdOn',
    'createdProjectOperation',
    'status',
    'action'
  ];

  dataSource = new MatTableDataSource<Project>([]);
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {
    const projects: Project[] = [
      {
        projectName: 'testing',
        poNumber: 'test123',
        createdBy: 'balaji',
        createdOn: '2025-08-12',
        client: 'Test Client',
        createdProjectOperation: '1',
        status: 'Active',
        id: '689af115e75ffe5a989fbe17'
      },
      {
        projectName: 'testing',
        poNumber: 'test123',
        createdBy: 'balaji',
        createdOn: '2025-08-12',
        client: 'Test Client',
        createdProjectOperation: '1',
        status: 'Active',
        id: '689af115e75ffe5a989fbe17'
      },
      {
        projectName: 'testing',
        poNumber: 'test123',
        createdBy: 'balaji',
        createdOn: '2025-08-12',
        client: 'Test Client',
        createdProjectOperation: '1',
        status: 'Active',
        id: '689af115e75ffe5a989fbe17'
      },
      {
        projectName: 'testing',
        poNumber: 'test123',
        createdBy: 'balaji',
        createdOn: '2025-08-12',
        client: 'Test Client',
        createdProjectOperation: '1',
        status: 'Active',
        id: '689af115e75ffe5a989fbe17'
      },
      {
        projectName: 'testing',
        poNumber: 'test123',
        createdBy: 'balaji',
        createdOn: '2025-08-12',
        client: 'Test Client',
        createdProjectOperation: '1',
        status: 'Active',
        id: '689af115e75ffe5a989fbe17'
      },
      {
        projectName: 'testing',
        poNumber: 'test123',
        createdBy: 'balaji',
        createdOn: '2025-08-12',
        client: 'Test Client',
        createdProjectOperation: '1',
        status: 'Active',
        id: '689af115e75ffe5a989fbe17'
      },
      {
        projectName: 'Lidl-test',
        poNumber: 'Lidl-test',
        createdBy: 'vinay',
        createdOn: '2025-07-14',
        client: 'Test Client',
        createdProjectOperation: '1',
        status: 'Active',
        id: '68750fa67cf4086a2784f72b'
      },
      {
        projectName: 'Lidl-test',
        poNumber: 'Lidl-test',
        createdBy: 'vinay',
        createdOn: '2025-07-14',
        client: 'Test Client',
        createdProjectOperation: '1',
        status: 'Active',
        id: '68750fa67cf4086a2784f72b'
      },
      {
        projectName: 'Lidl-test',
        poNumber: 'Lidl-test',
        createdBy: 'vinay',
        createdOn: '2025-07-14',
        client: 'Test Client',
       createdProjectOperation: '1',
        status: 'Active',
        id: '68750fa67cf4086a2784f72b'
      },
      {
        projectName: 'Lidl-test',
        poNumber: 'Lidl-test',
        createdBy: 'vinay',
        createdOn: '2025-07-14',
        client: 'Test Client',
        createdProjectOperation: '1',
        status: 'Active',
        id: '68750fa67cf4086a2784f72b'
      },
      {
        projectName: 'Lidl-test',
        poNumber: 'Lidl-test',
        createdBy: 'vinay',
        createdOn: '2025-07-14',
        client: 'Test Client',
        createdProjectOperation: '1',
        status: 'Active',
        id: '68750fa67cf4086a2784f72b'
      },
      {
        projectName: 'Lidl-test',
        poNumber: 'Lidl-test',
        createdBy: 'vinay',
        createdOn: '2025-07-14',
        client: 'Test Client',
        createdProjectOperation: '1',
        status: 'Active',
        id: '68750fa67cf4086a2784f72b'
      },
      {
        projectName: 'Lidl-test',
        poNumber: 'Lidl-test',
        createdBy: 'vinay',
        createdOn: '2025-07-14',
        client: 'Test Client',
        createdProjectOperation: '1',
        status: 'Active',
        id: '68750fa67cf4086a2784f72b'
      },
      {
        projectName: 'Lidl-test',
        poNumber: 'Lidl-test',
        createdBy: 'vinay',
        createdOn: '2025-07-14',
        client: 'Test Client',
        createdProjectOperation: '1',
        status: 'Active',
        id: '68750fa67cf4086a2784f72b'
      },
      {
        projectName: 'sudhan',
        poNumber: 'Lidl-test',
        createdBy: 'vinay',
        createdOn: '2025/07/14',
        client: 'Test Client',
        createdProjectOperation: '1',
        status: 'Active',
        id: '68750fa67cf4086a2784f72b'
      },
      {
        projectName: 'vicky',
        poNumber: 'Lidl-test',
        createdBy: 'vinay',
        createdOn: '2025-07-14',
        client: 'Test Client',
        createdProjectOperation: '1',
        status: 'Active',
        id: '68750fa67cf4086a2784f72b'
      }
    ];
    this.dataSource = new MatTableDataSource(projects);
  }

 ngAfterViewInit() {
  this.dataSource.paginator = this.paginator;
  this.paginator.pageSize = 12;
}

  onEdit(project: Project) {
    console.log('Edit clicked', project);
  }

  onDelete(project: Project) {
    console.log('Delete clicked', project);
  }

  // dialog form
   visible: boolean = false;

    showDialog() {
        this.visible = true;
    }
}