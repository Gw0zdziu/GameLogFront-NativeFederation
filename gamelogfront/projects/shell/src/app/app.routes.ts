import { Routes } from '@angular/router';
import {loadRemoteModule} from '@angular-architects/native-federation';
import {AppComponent} from '../../../categories/src/app/app.component';

export const routes: Routes = [
  {
    path: 'auth',
    loadComponent: () =>
      loadRemoteModule({
        remoteName: 'auth',
        exposedModule: './Component',
      }).then((m) => m.AppComponent),
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
];
