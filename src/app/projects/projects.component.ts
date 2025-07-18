import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

interface Project {
  name: string;
  description: string;
  technologies: string;
  imageUrl: string;
  websiteUrl: string;
  codeUrl: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CardModule, CommonModule, ButtonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      name: 'Todo-List',
      description:
        'Todo List app allows users to manage tasks by adding, prioritizing, and tracking due dates with an intuitive interface.',
      technologies: 'Technology used: Angular',
      imageUrl: 'assets/images/todo-list.png',
      websiteUrl: 'https://personal-todos-list.netlify.app/',
      codeUrl: 'https://github.com/PalgunaSE2021/todo-list',
    },
    {
      name: 'Github-User-Search',
      description:
        ' GitHub User Search app enables users to search for GitHub profiles, displaying detailed information.',
      technologies: 'Technology used: Angular',
      imageUrl: 'assets/images/githubUserSearch.png',
      websiteUrl: 'https://find-github-user-repos.netlify.app/',
      codeUrl: 'https://github.com/PalgunaSE2021/githubUserSearch',
    },
  ];
}
