
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ThemeService } from '../../services/theme.service';

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

  isDarkMode = false;
  // isDarkMode = this.theme.currentTheme === 'dark';
  
  constructor(private theme: ThemeService) {}

  ngOnInit(): void {
    this.isDarkMode = this.theme.currentTheme === 'dark';
  }
  toggleTheme() {
    this.theme.toggleTheme();
    this.isDarkMode = this.theme.currentTheme === 'dark';
    console.log('Theme switched to', this.theme.currentTheme);
  }
}
