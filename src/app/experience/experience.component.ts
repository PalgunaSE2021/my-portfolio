import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {
  experiences = [
    {
      company: 'Rytcost Software Solutions',
      role: 'Fullstack Developer',
      duration: 'July 2025 - Dec 2025',
      description: [
        'Ahara-Mulya: Developed and maintained web applications using React.js and mobile applications using React Native with Expo for restaurant costing and management platform.',
        'Rytcost: Worked on both React.js web applications and React Native + Expo mobile applications for a civil and construction Earned Value Management (EVM) platform.',
        'Nursery-management: Developed web and mobile applications for an Indo-American plant nursery, implementing customized features and workflows based on the company’s internal business requirements.',
      ],
      technologies: ['React', 'Javascript', 'React Native', 'Expo', 'CSS', 'HTML'],
      expanded: true,
    },
    {
      company: 'Dhiway Networks',
      role: 'Fullstack Developer',
      duration: 'Dec 2025 - Sept 2026',
      description: `Developed and enhanced web applications using React, collaborating with client teams to understand requirements and deliver effective solutions. Handled support requests and resolved real-time application issues, ensuring smooth functionality and timely resolution of client requirements.`,
      technologies: ['React', 'Javascript','SQL', 'CSS', 'HTML'],
      expanded: false,
    },
    {
      company: 'Fyle Technologies Pvt Ltd',
      role: 'Frontend Developer Intern',
      duration: 'Dec 2024 - Jun 2025',
      description: `Completed a 6 month internship at Fyle technologies as a frontend intern.Migrated complex UI pages of Fyle web app from AngularJS to Angular 19 (which was latest at that time), improving maintainability and performance. Developed automated end-to-end tests using Playwright to ensure bug free execution post migration`,
      technologies: ['Angular', 'TypeScript', 'SCSS', 'Playwright'],
      expanded: false,
    },
    {
      company: 'Varcons Technologies Pvt Ltd',
      role: 'Junior Frontend Intern',
      duration: 'Aug 2023 - Sept 2023',
      description: `During my one-month internship, I worked on some minor websites but unfortunetely my code did not go for production. I collaborated with the team to enhance user experience and ensure seamless functionality across the website.`,
      technologies: ['Angular', 'Tailwind CSS', 'PrimeNG', 'RxJS'],
      expanded: false,
    },
  ];

  toggleExpand(index: number): void {
    console.log('Toggling', index);
    this.experiences[index].expanded = !this.experiences[index].expanded;
    this.experiences = [...this.experiences];
  }

  trackByIndex(index: number): number {
    return index;
  }
}
