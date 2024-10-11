import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Task} from "../../../models/Task";
import {COMPLETED_TASKS_FILTER, PENDING_OR_IN_PROGRESS} from "../../../utils/task-filters";

@Component({
  selector: 'task-overview',
  standalone: true,
  imports: [],
  templateUrl: './task-overview.component.html',
  styleUrl: './task-overview.component.scss'
})
export class TaskOverviewComponent implements OnInit, OnChanges{
  @Input() filteredTasks!: Task[];
  private pendingTasks:Task[] = [];
  private time_estipuled = 0;

  pendingTasksCount: number = 0;
  concludedTasksCount: number = 0;
  hours: number = 0;
  minutes: number  = 0;
  containsHours: boolean  = false;



  ngOnInit() {
   this.loadValues();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.loadValues();
  }

  loadValues() {
    this.pendingTasks = this.filteredTasks.filter(PENDING_OR_IN_PROGRESS);
    this.pendingTasksCount = this.pendingTasks.length

    this.time_estipuled = this.pendingTasks
      .map((task: Task) => task.pomodoro_value * task.total_pomodori)
      .reduce((accumulator, currentValue) => accumulator + currentValue, 0);


    this.hours = Math.floor(this.time_estipuled / 60);
    this.minutes  = this.time_estipuled % 60;
    this.containsHours = this.hours != 0;


    this.concludedTasksCount = this.filteredTasks.filter(COMPLETED_TASKS_FILTER).length;
  }
}
