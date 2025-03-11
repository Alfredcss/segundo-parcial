import { Routes } from '@angular/router';
import { LibroComponent } from './pages/libro/libro.component'; 
import { AboutComponent } from './pages/about/about.component';
import { ProductoComponent } from './pages/producto/producto.component'; 
import { HomeComponent } from './pages/home/home.component';
import { CamionComponent } from './pages/camion/camion.component';

export const routes: Routes = [
    {
        path : 'home',
        component: HomeComponent
    },
    {
        path : 'producto',
        component: ProductoComponent
    },
    {
        path: 'libro',
        component: LibroComponent
    },
    {
        path: 'camion',
        component:CamionComponent
    },
    {
        path: 'about',
        component:AboutComponent
    },
    {
        path:'**',
        redirectTo: 'home'
    }
];
