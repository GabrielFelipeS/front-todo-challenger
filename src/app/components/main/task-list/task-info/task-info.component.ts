import {Component, Input} from '@angular/core';
import {Task} from "../../../../models/Task";

@Component({
  selector: 'app-task-info',
  standalone: true,
  imports: [],
  templateUrl: './task-info.component.html',
  styleUrl: './task-info.component.scss'
})
export class TaskInfoComponent {
  @Input() task!: Task;

  isComplete(): boolean {
    return this.task.status == 'completed';
  }


}
