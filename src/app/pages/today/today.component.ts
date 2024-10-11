import { Component } from '@angular/core';
import {AsideComponent} from "../../components/aside/aside.component";
import {MainComponent} from "../../components/main/main.component";
import * as TaskFilters from '../../utils/task-filters';

@Component({
  selector: 'app-today',
  standalone: true,
  imports: [
    AsideComponent,
    MainComponent
  ],
  templateUrl: './today.component.html',
  styleUrl: './today.component.scss'
})
export class TodayComponent {
  taskFilters = TaskFilters;
}
