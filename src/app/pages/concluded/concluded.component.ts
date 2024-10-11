import { Component } from '@angular/core';
import {AsideComponent} from "../../components/aside/aside.component";
import * as TaskFilters from "../../utils/task-filters";
import {MainComponent} from "../../components/main/main.component";

@Component({
  selector: 'app-concluded',
  standalone: true,
  imports: [
    AsideComponent,
    MainComponent
  ],
  templateUrl: './concluded.component.html',
  styleUrl: './concluded.component.scss'
})
export class ConcludedComponent {
  taskFilters = TaskFilters;
}
