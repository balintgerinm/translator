import { Component, ViewEncapsulation, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'translator';
  @HostListener("window:beforeunload",["$event"])
    clearLocalStorage(){
        window.localStorage.clear();
    }
}
