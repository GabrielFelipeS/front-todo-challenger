import { Routes } from '@angular/router';
import {TodayComponent} from "./pages/today/today.component";
import {TomorrowComponent} from "./pages/tomorrow/tomorrow.component";
import {ThisWeekComponent} from "./pages/this-week/this-week.component";
import {SevenDaysComponent} from "./pages/seven-days/seven-days.component";
import {PlannedComponent} from "./pages/planned/planned.component";
import {ConcludedComponent} from "./pages/concluded/concluded.component";
import {AllTasksComponent} from "./pages/all-tasks/all-tasks.component";

export const routes: Routes = [
  { path: 'today', component: TodayComponent },
  { path: 'tomorrow', component: TomorrowComponent },
  { path: 'thisWeek', component: ThisWeekComponent },
  { path: 'sevenDays', component: SevenDaysComponent },
  { path: 'planned', component: PlannedComponent },
  { path: 'concluded', component: ConcludedComponent },
  { path: 'tasks', component: AllTasksComponent },
  { path: '**', redirectTo: '/today' },
];
