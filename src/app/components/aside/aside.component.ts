import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ThemeSwitcherComponent} from "./theme-switcher/theme-switcher.component";
import {AsideMenuOptionComponent} from "./aside-menu-option/aside-menu-option.component";
import {Task} from "../../models/Task";
import {TaskService} from "../../services/task.service";
import * as TaskFilters from '../../utils/task-filters';

@Component({
  selector: 'app-aside',
  standalone: true,
  imports: [
    ThemeSwitcherComponent,
    AsideMenuOptionComponent
  ],
  templateUrl: './aside.component.html',
  styleUrl: './aside.component.scss'
})
export class AsideComponent implements OnInit{
  tasks: Task[] = [];
  taskFilters = TaskFilters;

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => {
      this.tasks = tasks;
    })
  }

}
