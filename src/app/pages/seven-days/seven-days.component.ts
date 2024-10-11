import { Component } from '@angular/core';
import {AsideComponent} from "../../components/aside/aside.component";
import * as TaskFilters from "../../utils/task-filters";
import {MainComponent} from "../../components/main/main.component";

@Component({
  selector: 'app-seven-days',
  standalone: true,
  imports: [
    AsideComponent,
    MainComponent
  ],
  templateUrl: './seven-days.component.html',
  styleUrl: './seven-days.component.scss'
})
export class SevenDaysComponent {
  taskFilters = TaskFilters;
}
