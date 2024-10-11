import { Component } from '@angular/core';
import {AsideComponent} from "../../components/aside/aside.component";
import * as TaskFilters from "../../utils/task-filters";
import {MainComponent} from "../../components/main/main.component";

@Component({
  selector: 'app-planned',
  standalone: true,
  imports: [
    AsideComponent,
    MainComponent
  ],
  templateUrl: './planned.component.html',
  styleUrl: './planned.component.scss'
})
export class PlannedComponent {
  taskFilters = TaskFilters;
}
