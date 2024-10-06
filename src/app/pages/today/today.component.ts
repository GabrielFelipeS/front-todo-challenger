import { Component } from '@angular/core';
import {AsideComponent} from "../../components/aside/aside.component";

@Component({
  selector: 'app-today',
  standalone: true,
  imports: [
    AsideComponent
  ],
  templateUrl: './today.component.html',
  styleUrl: './today.component.scss'
})
export class TodayComponent {

}
