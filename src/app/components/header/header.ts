import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class Header {
  activeSection: string = 'home';
  isScrolled = false;

  @HostListener('window:scroll', [])
  onScroll(): void {
    this.isScrolled = window.scrollY > 50;

    const sections = ['home', 'about', 'projects', 'resume', 'contact'];
    for (const id of sections) {
      const el = document.getElementById(id);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= 50 && rect.bottom >= 50) {
          this.activeSection = id;
          break;
        }
      }
    }
  }
}