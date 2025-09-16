import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection,
  importProvidersFrom,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon'; 
import { providePrimeNG } from 'primeng/config';
import { PaginatorModule } from 'primeng/paginator';
import { routes } from './app.routes';
// import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { DialogModule } from 'primeng/dialog';
import Aura from '@primeuix/themes/aura';
export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    providePrimeNG({
            theme: {
                preset: Aura
            }
        }),
    // provideHttpClient(),
     provideAnimations(),
    provideRouter(routes),
    importProvidersFrom(
      MatPaginatorModule,
      MatIconModule,
      PaginatorModule,
      DialogModule
    ),
  ],
};
