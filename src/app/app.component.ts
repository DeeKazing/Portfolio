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
  
    setTimeout(() => {
      self.isLoading = false;
      if (!self.isLoading) {
        container!.classList.add('fade-in');
      }
    }, 500);
  
    const canvas = document.querySelector('canvas');
    const section = document.querySelector('body');
  
    section!.addEventListener('mousemove', function (event) {
      if (!self.isLoading && event.target !== canvas) {
        event.stopPropagation();
        canvas!.dispatchEvent(new MouseEvent('mousemove', event));
      }
    });
  }
}
