import { Component } from '@angular/core';
import {AsideComponent} from "../../components/aside/aside.component";
import {MainComponent} from "../../components/main/main.component";

@Component({
  selector: 'app-today',
  standalone: true,
  imports: [
    AsideComponent,
    MainComponent
  ],
  templateUrl: './today.component.html',
  styleUrl: './today.component.scss'
})
export class TodayComponent {

}
