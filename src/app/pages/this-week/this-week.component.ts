import { Component } from '@angular/core';
import {AsideComponent} from "../../components/aside/aside.component";
import * as TaskFilters from "../../utils/task-filters";
import {MainComponent} from "../../components/main/main.component";

@Component({
  selector: 'app-this-week',
  standalone: true,
  imports: [
    AsideComponent,
    MainComponent
  ],
  templateUrl: './this-week.component.html',
  styleUrl: './this-week.component.scss'
})
export class ThisWeekComponent {
  taskFilters = TaskFilters;
}
