import { Component } from '@angular/core';
import {AsideComponent} from "../../components/aside/aside.component";

@Component({
  selector: 'app-all-tasks',
  standalone: true,
  imports: [
    AsideComponent
  ],
  templateUrl: './all-tasks.component.html',
  styleUrl: './all-tasks.component.scss'
})
export class AllTasksComponent {

}
