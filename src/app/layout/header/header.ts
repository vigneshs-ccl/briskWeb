
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


interface Languages  {
  lang:string;
  val:string;
}

@Component({
  selector: 'app-header',
  standalone:true,
  imports: [FormsModule,CommonModule],
  templateUrl: './header.html',
  styleUrls: ['./header.scss']
})
export class Header {
  languages:Languages[] = [
    { lang: 'English', val: 'en' },
    { lang: 'German', val: 'de' },
    { lang: 'French', val: 'fr' },
    { lang: 'Hindi', val: 'hi' },
  ];

  dropdownWidth = '150px'; 
  dropdownHeight = '50px';
  selectedLanguage = "en"


  // dark/light mode:
  isDarkMode = true;

  toggleTheme() {
    // dark theme implementation section
    console.log('Dark Mode:', this.isDarkMode);
  }
}
