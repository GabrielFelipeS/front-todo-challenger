import { Component } from '@angular/core';
import {AsideComponent} from "../../components/aside/aside.component";

@Component({
  selector: 'app-planned',
  standalone: true,
  imports: [
    AsideComponent
  ],
  templateUrl: './planned.component.html',
  styleUrl: './planned.component.scss'
})
export class PlannedComponent {

}
