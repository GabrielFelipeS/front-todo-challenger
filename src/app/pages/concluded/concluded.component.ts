import { Component } from '@angular/core';
import {AsideComponent} from "../../components/aside/aside.component";

@Component({
  selector: 'app-concluded',
  standalone: true,
  imports: [
    AsideComponent
  ],
  templateUrl: './concluded.component.html',
  styleUrl: './concluded.component.scss'
})
export class ConcludedComponent {

}
