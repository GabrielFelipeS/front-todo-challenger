import { Routes } from '@angular/router';
import {TodayComponent} from "./pages/today/today.component";

export const routes: Routes = [
  { path: '**', component: TodayComponent },
];
