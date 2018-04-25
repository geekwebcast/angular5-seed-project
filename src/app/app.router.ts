import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const router: Routes = [
    {
        path: '',
        loadChildren: 'app/core/core.module#CoreModule',
        pathMatch: 'full'
    }
];

export const appRouter: ModuleWithProviders = RouterModule.forRoot(router, { useHash: true });
