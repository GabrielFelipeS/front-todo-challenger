import {Component, Input, OnInit} from '@angular/core';
import {Task} from "../../../models/Task";

@Component({
  selector: 'aside-menu-option',
  standalone: true,
  imports: [],
  templateUrl: './aside-menu-option.component.html',
  styleUrl: './aside-menu-option.component.scss'
})
export class AsideMenuOptionComponent implements OnInit{
  @Input() titulo!: string;
  @Input() urlImg!: string;

  @Input() filter!: (task: Task) => boolean;
  @Input()  tasks: Task[] = [];
  hour: number = 0;
  minute: number = 0;
  tasksNotCompleted: number = 0;

  ngOnInit(): void {
    const filteredTasks = this.tasks.filter(this.filter);
    const totalTime =
      filteredTasks.map(task => task.pomodoro_value * task.total_pomodori)
        .reduce(
          (accumulator, currentValue) => accumulator + currentValue, 0);

    this.hour = Math.floor(totalTime / 60);
    this.minute = totalTime % 60;

    this.tasksNotCompleted = filteredTasks.length;
  }
}
