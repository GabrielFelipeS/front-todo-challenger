import { Component } from '@angular/core';
import {AsideComponent} from "../../components/aside/aside.component";

@Component({
  selector: 'app-seven-days',
  standalone: true,
  imports: [
    AsideComponent
  ],
  templateUrl: './seven-days.component.html',
  styleUrl: './seven-days.component.scss'
})
export class SevenDaysComponent {

}
