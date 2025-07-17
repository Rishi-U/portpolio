import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appScrollHighlight]',
})
export class ScrollHighlightDirective {
  constructor(private el: ElementRef) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const sections = document.querySelectorAll('section');
    const scrollPos = window.scrollY + 100;

    sections.forEach((section) => {
      const id = section.getAttribute('id');
      if (!id) return;

      const top = section.offsetTop;
      const height = section.clientHeight;

      const navLink = document.querySelector(`a[href="#${id}"]`);

      if (scrollPos >= top && scrollPos < top + height) {
        navLink?.classList.add('text-primary', 'font-semibold');
      } else {
        navLink?.classList.remove('text-primary', 'font-semibold');
      }
    });
  }
}