import { Component } from '@angular/core';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss'],
})
export class CVComponent {
  currentLanguage: string = 'de';

  toggleLanguage() {
    this.currentLanguage = this.currentLanguage === 'de' ? 'en' : 'de';
  }
}
