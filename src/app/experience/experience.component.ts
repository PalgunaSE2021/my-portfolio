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
      company: 'Fyle Technologies Pvt Ltd',
      role: 'Frontend Developer Intern',
      duration: 'Dec 2024 - Jun 2025',
      description: ` Migrated 3 complex UI pages from AngularJS to latest angular,improving maintainability and performance. Developed automated end-to-end testing using Playwright to ensure smooth functionality post-migration.`,
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
