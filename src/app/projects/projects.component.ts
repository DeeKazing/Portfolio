import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  currentLanguage: string = 'de'; // Standardmäßig auf Deutsch setzen

  toggleLanguage(): void {
    this.currentLanguage = this.currentLanguage === 'de' ? 'en' : 'de'; // Zwischen Deutsch und Englisch wechseln
  }
}
