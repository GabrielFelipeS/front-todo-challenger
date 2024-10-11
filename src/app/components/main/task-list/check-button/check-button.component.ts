import {Component, Input} from '@angular/core';
import {Task} from "../../../../models/Task";
import {TaskService} from "../../../../services/task.service";

@Component({
  selector: 'app-check-button',
  standalone: true,
  imports: [],
  templateUrl: './check-button.component.html',
  styleUrl: './check-button.component.scss'
})
export class CheckButtonComponent {
  @Input() task!: Task;

  constructor(private taskService: TaskService) {}

  isComplete(): boolean {
    console.log(this.task.status == 'completed')
    return this.task.status == 'completed';
  }

  changeStatus() {
    const status = this.task.status;
    const value = this.task.completed_pomodori;

    if(status == 'completed' && value != 0) {
      this.task.status = 'in_progress'
    }  else if(status != 'completed') {
      this.task.status = 'completed';
    } else {
      this.task.status = 'pending';
    }

    this.taskService.changeStatus(this.task);
  }
}
