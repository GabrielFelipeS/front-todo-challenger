import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Task} from "../../../models/Task";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'aside-menu-option',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './aside-menu-option.component.html',
  styleUrl: './aside-menu-option.component.scss'
})
export class AsideMenuOptionComponent implements OnInit, OnChanges{
  @Input() titulo!: string;
  @Input() urlImg!: string;
  @Input() endPoint!: string;
  @Input() filter!: (task: Task) => boolean;
  @Input()  tasks: Task[] = [];

  hour: number = 0;
  minute: number = 0;
  tasksNotCompleted: number = 0;
  selected: string = 'menu-option';

  ngOnInit(): void {
   this.updateValues()
  }

  ngOnChanges(changes: SimpleChanges): void {
      this.updateValues();
  }

  private updateValues() {
    const filteredTasks = this.tasks.filter(this.filter);
    const totalTime =
      filteredTasks.map(task => task.pomodoro_value * task.total_pomodori)
        .reduce(
          (accumulator, currentValue) => accumulator + currentValue, 0);

    this.hour = Math.floor(totalTime / 60);
    this.minute = totalTime % 60;

    this.tasksNotCompleted = filteredTasks.length;
    console.log("AQUI")
  }

  isSelected() {
    const currentEndpoint = window.location.pathname;
    return this.endPoint.includes(currentEndpoint);
  }
}
