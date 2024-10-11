import { Component } from '@angular/core';
import {AsideComponent} from "../../components/aside/aside.component";

@Component({
  selector: 'app-this-week',
  standalone: true,
  imports: [
    AsideComponent
  ],
  templateUrl: './this-week.component.html',
  styleUrl: './this-week.component.scss'
})
export class ThisWeekComponent {

}
