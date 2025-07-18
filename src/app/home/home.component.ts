import { Component, OnInit, Renderer2 } from '@angular/core';
import { ProjectsComponent } from '../projects/projects.component';
import { ContactComponent } from '../contact/contact.component';
import { AboutComponent } from '../about/about.component';
import { NavigationComponent } from '../navigation/navigation.component';
import { ProfileComponent } from '../profile/profile.component';
import { CommonModule } from '@angular/common';
import { ChangeDetectorRef } from '@angular/core';
import { ExperienceComponent } from '../experience/experience.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ProjectsComponent,
    ContactComponent,
    AboutComponent,
    NavigationComponent,
    ProfileComponent,
    CommonModule,
    ExperienceComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  isLoading: boolean = true;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = false; // Hide the loader after 2.25 seconds
      this.cdr.detectChanges(); // Update the view after loader completion
    }, 2250); // Time delay before showing content
  }
}
