import { Routes } from '@angular/router';
import {loadRemoteModule} from '@angular-architects/native-federation';

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      loadRemoteModule({
        remoteName: 'auth',
        exposedModule: './Routes',
      }).then((m) => m.routes),
  },
];
