import { Component } from '@angular/core';
import {ThemeSwitcherComponent} from "../theme-switcher/theme-switcher.component";

@Component({
  selector: 'app-aside',
  standalone: true,
  imports: [
    ThemeSwitcherComponent
  ],
  templateUrl: './aside.component.html',
  styleUrl: './aside.component.scss'
})
export class AsideComponent {

}
