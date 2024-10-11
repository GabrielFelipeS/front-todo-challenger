import { Component } from '@angular/core';
import {AsideComponent} from "../../components/aside/aside.component";
import {MainComponent} from "../../components/main/main.component";
import * as TaskFilters from "../../utils/task-filters";

@Component({
  selector: 'app-tomorrow',
  standalone: true,
  imports: [
    AsideComponent,
    MainComponent
  ],
  templateUrl: './tomorrow.component.html',
  styleUrl: './tomorrow.component.scss'
})
export class TomorrowComponent {
  taskFilters = TaskFilters;
}
