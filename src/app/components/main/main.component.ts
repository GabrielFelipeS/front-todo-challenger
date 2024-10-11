import {Component, Input} from '@angular/core';
import {TaskOverviewComponent} from "./task-overview/task-overview.component";
import {TaskListComponent} from "./task-list/task-list.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    TaskOverviewComponent,
    TaskListComponent
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  @Input() title!: string;
}
