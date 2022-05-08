import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  /**
   * first-to-call function
   * Navbar has no functionality at this point
   */
  ngOnInit(): void {
  }

}
