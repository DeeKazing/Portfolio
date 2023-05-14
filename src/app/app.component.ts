import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Portfolio';

  isLoading: boolean = true;

  ngAfterViewInit(): void {
    const self = this;
    const container = document.querySelector('.container');
  
    // Führe den Fade-In-Effekt nach 2 Sekunden aus, wenn isLoading auf false gesetzt wurde
    setTimeout(() => {
      self.isLoading = false;
      if (!self.isLoading) {
        container!.classList.add('fade-in');
      }
    }, 500);
  
    const canvas = document.querySelector('canvas');
    const section = document.querySelector('body');
  
    // Leite das Mousemove-Event an das Canvas weiter, wenn isLoading false ist
    section!.addEventListener('mousemove', function (event) {
      if (!self.isLoading && event.target !== canvas) {
        event.stopPropagation();
        canvas!.dispatchEvent(new MouseEvent('mousemove', event));
      }
    });
  }
}
