import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  activeSection: string = '';
  showScrollToTop: boolean = false;

  ngOnInit(): void {
    this.onScroll();
  }

  @HostListener('window:scroll', [])
  onScroll() {
    const sections = document.querySelectorAll('section');
    const scrollPos = window.scrollY + 150;
    this.showScrollToTop = window.scrollY > 300;

    sections.forEach((section: Element) => {
      const top = section.getBoundingClientRect().top + window.scrollY;
      const bottom = top + section.clientHeight;
      const id = section.getAttribute('id');

      if (scrollPos >= top && scrollPos <= bottom && id) {
        this.activeSection = id;
      }
    });
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}