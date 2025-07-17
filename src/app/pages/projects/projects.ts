import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('600ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Weather App',
      image: 'assets/projects/weather-app.png',
      description: 'A simple weather forecast app using Angular and OpenWeatherMap API.',
      tags: ['Angular', 'API', 'CSS'],
      github: 'https://github.com/yourusername/weather-app',
      live: 'https://yourportfolio.com/weather-app'
    },
    {
      title: 'Rock Paper Scissors',
      image: 'assets/projects/rps-game.png',
      description: 'A fun rock-paper-scissors game with animations.',
      tags: ['JavaScript', 'CSS', 'HTML'],
      github: 'https://github.com/yourusername/rock-paper-scissors',
      live: 'https://yourportfolio.com/rps-game'
    },
    {
      title: 'Amazon Clone',
      image: 'assets/projects/amazon-clone.png',
      description: 'An e-commerce clone with product filtering and cart system.',
      tags: ['Angular', 'Firebase', 'Responsive Design'],
      github: 'https://github.com/yourusername/amazon-clone',
      live: 'https://yourportfolio.com/amazon-clone'
    }
  ];
}