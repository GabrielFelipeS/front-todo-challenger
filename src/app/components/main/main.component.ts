import {Component, Input, OnInit} from '@angular/core';
import {TaskOverviewComponent} from "./task-overview/task-overview.component";
import {TaskListComponent} from "./task-list/task-list.component";
import {Task} from "../../models/Task";
import {TaskService} from "../../services/task.service";

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
export class MainComponent implements OnInit {
  @Input() title!: string;
  @Input() predicate!: (task: Task) => boolean;

  filterdTasks: Task[] = [];


  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => {
      this.filterdTasks = tasks.filter(this.predicate);
    })
  }
}
