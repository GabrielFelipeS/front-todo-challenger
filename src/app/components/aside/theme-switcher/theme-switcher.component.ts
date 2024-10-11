import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'theme-switcher',
  standalone: true,
  imports: [],
  templateUrl: './theme-switcher.component.html',
  styleUrl: './theme-switcher.component.scss'
})
export class ThemeSwitcherComponent {
  private isDarkMode: boolean = false;
  imgTheme = "assets/ligthModeIcon.png";

  constructor() {
    this.imageByMode();
  }

  handlerTheme() {
    document.body.classList.toggle("dark")
    this.imageByMode();
  }

  private imageByMode() {
    this.isDarkMode = document.body.classList.contains("dark") ;
    this.imgTheme = this.isDarkMode?  "assets/darkModeIcon.png" : "assets/ligthModeIcon.png";
  }
}
