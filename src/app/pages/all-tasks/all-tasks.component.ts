import { Component } from '@angular/core';
import {AsideComponent} from "../../components/aside/aside.component";
import * as TaskFilters from "../../utils/task-filters";
import {MainComponent} from "../../components/main/main.component";

@Component({
  selector: 'app-all-tasks',
  standalone: true,
  imports: [
    AsideComponent,
    MainComponent
  ],
  templateUrl: './all-tasks.component.html',
  styleUrl: './all-tasks.component.scss'
})
export class AllTasksComponent {
  taskFilters = TaskFilters;
}
