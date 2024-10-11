import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";
import {Task} from "../models/Task";
import {mockTasks} from "../mocks/MockTasks";

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private task$ = new BehaviorSubject<Task[]>([]);

  constructor() {
    this.task$.next(mockTasks);
  }

  getTasks() {
    return this.task$.asObservable();
  }

  changeStatus(updatedTask: Task) {
    const currentTasks = this.task$.getValue();

    const updatedTasks = currentTasks.map(task =>
      task.id === updatedTask.id ? { ...task, ...updatedTask } : task
    );

    console.log(this.task$.getValue().length)
    console.log(this.task$.getValue().length)
    this.task$.next(updatedTasks);
    console.log("atualizado")
  }
}
