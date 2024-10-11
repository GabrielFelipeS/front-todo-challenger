import { Component } from '@angular/core';
import {AsideComponent} from "../../components/aside/aside.component";

@Component({
  selector: 'app-tomorrow',
  standalone: true,
  imports: [
    AsideComponent
  ],
  templateUrl: './tomorrow.component.html',
  styleUrl: './tomorrow.component.scss'
})
export class TomorrowComponent {

}
