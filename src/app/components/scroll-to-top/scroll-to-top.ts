import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-scroll-top',
  template: `<button *ngIf="show" (click)="scrollTop()" class="scroll-top-btn">⬆️</button>`,
  styleUrls: ['./scroll-top.component.css'],
})
export class ScrollTopComponent {
  show = false;

  @HostListener('window:scroll')
  onScroll() {
    this.show = window.scrollY > 300;
  }

  scrollTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}