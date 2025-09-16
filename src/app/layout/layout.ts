import { Component } from '@angular/core';
import { Sidebar } from './sidebar/sidebar';
import { Header } from './header/header';
// import { Footer } from './footer/footer';
import { RouterOutlet } from '@angular/router';
import { CustomTable } from '../pages/custom-table/custom-table';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet,Sidebar,Header,//Footer
    CustomTable
  ],
  templateUrl: './layout.html',
  styleUrls: ['./layout.scss']
})
export class Layout {

}
