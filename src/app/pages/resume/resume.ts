import { Component, ElementRef, AfterViewInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements AfterViewInit {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit() {
    const section = this.el.nativeElement.querySelector('.resume-section');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.renderer.addClass(section, 'visible');
            observer.unobserve(section); // optional: animate once
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(section);
  }
}