import { Component } from '@angular/core';
import { trigger, style, animate, transition, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  animations: [
    trigger('fadeStagger', [
      transition(':enter', [
        query('.skill-card', [
          style({ opacity: 0, transform: 'translateY(20px)' }),
          stagger(100, [
            animate('600ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class SkillsComponent {
  skills = [
    { name: 'Angular', icon: 'assets/skills/angular.svg' },
    { name: 'Java', icon: 'assets/skills/java.svg' },
    { name: 'Spring Boot', icon: 'assets/skills/springboot.svg' },
    { name: 'HTML', icon: 'assets/skills/html.svg' },
    { name: 'CSS', icon: 'assets/skills/css.svg' },
    { name: 'JavaScript', icon: 'assets/skills/javascript.svg' },
    { name: 'TypeScript', icon: 'assets/skills/typescript.svg' },
    { name: 'Git', icon: 'assets/skills/git.svg' },
    { name: 'GitHub', icon: 'assets/skills/github.svg' },
    { name: 'VS Code', icon: 'assets/skills/vscode.svg' }
  ];
}