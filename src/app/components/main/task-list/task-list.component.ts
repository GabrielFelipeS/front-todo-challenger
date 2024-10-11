import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Task} from "../../../models/Task";
import {CheckButtonComponent} from "./check-button/check-button.component";
import {TaskInfoComponent} from "./task-info/task-info.component";
import {PLANNED_TASKS_FILTER_PENDING_OR_IN_PROGRESS} from "../../../utils/task-filters";

@Component({
  selector: 'task-list',
  standalone: true,
  imports: [
    CheckButtonComponent,
    TaskInfoComponent
  ],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss'
})
export class TaskListComponent implements OnInit, OnChanges{
  @Input() filteredTasks!: Task[];
  notCompletedTasks: Task[] = [];

  ngOnInit() {
    this.filterTask();
  }

  ngOnChanges(changes: SimpleChanges): void {
    setTimeout(() => {
      this.filterTask();
    }, 2250);
  }

  filterTask() {
    this.notCompletedTasks = this.filteredTasks.filter(PLANNED_TASKS_FILTER_PENDING_OR_IN_PROGRESS)

  }



}
