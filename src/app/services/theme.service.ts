import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private storageKey = 'app-theme';

  constructor() {
    // Load persisted theme
    const saved = localStorage.getItem(this.storageKey) || 'light';
    this.setTheme(saved as 'light' | 'dark', false);
  }

  setTheme(theme: 'light' | 'dark', persist = true) {
    document.documentElement.setAttribute('data-theme', theme);
    if (persist) localStorage.setItem(this.storageKey, theme);
  }

  toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme') as 'light' | 'dark';
    this.setTheme(current === 'dark' ? 'light' : 'dark');
  }

  get currentTheme(): 'light' | 'dark' {
    return (document.documentElement.getAttribute('data-theme') as 'light' | 'dark') || 'light';
  }
}