import { Component, ViewEncapsulation } from '@angular/core';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button'; // for pButton styling
import { MenuItem } from 'primeng/api';
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
  selector: 'app-custom-table',
  imports: [TableModule, CommonModule,MenuModule,ButtonModule],
  templateUrl: './custom-table.html',
  styleUrls: ['./custom-table.scss'],

})
export class CustomTable {
  projects:Project[] = [];
   actionItems: MenuItem[] = [];
    

  ngOnInit(): void {
    this.projects = [
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
     this.actionItems = [
      { label: 'Edit', icon: 'pi pi-pencil' },
      { label: 'Delete', icon: 'pi pi-trash' }
    ];
  }

  
}
