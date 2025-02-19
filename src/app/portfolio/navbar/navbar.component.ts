import { Component } from '@angular/core';
// import { Router } from 'express';
import { Router } from '@angular/router'


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  constructor(public router: Router){}

  onHome() {
    this.router.navigate(['./portfolio/home'])
  }

  onSkills() {
    const skillSelection = document.getElementById('skills-section')
    if(skillSelection) {
      skillSelection.scrollIntoView({behavior: 'smooth', block: 'start'})
    }
  }

  onAbout() {
    this.router.navigate(['./portfolio/about'])
  }

  onContact() {
    this.router.navigate(['./portfolio/contact'])
  }
}
