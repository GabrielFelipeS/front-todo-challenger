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
}
