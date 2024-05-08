import { Component } from '@angular/core';
// import { Router } from 'express';
import { Router } from '@angular/router'

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  
  youtubeLink = 'https://www.youtube.com/@codefusion_hub'
  emailAddress = 'getmeggg5@gmail.com'
  
  constructor(public router: Router){}

  onHome() {
    window.scrollTo({top:0, behavior: 'smooth'})
  }


  onAbout() {
    this.router.navigate(['./portfolio/about'])
  }

  onContact() {
    this.router.navigate(['./portfolio/contact'])
  }
}
