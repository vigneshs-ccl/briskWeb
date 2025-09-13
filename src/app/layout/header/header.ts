
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

interface Languages  {
  lang:string;
  val:string;
}

@Component({
  selector: 'app-header',
  standalone:true,
  imports: [FormsModule,CommonModule,NgSelectModule],
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

  // selectedLanguage: Languages = this.languages[0];

  selectedLanguage = "en"

}
