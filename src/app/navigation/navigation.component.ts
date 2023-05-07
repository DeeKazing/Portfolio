import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
    this.elementRef.nativeElement.querySelector('#entry').addEventListener('click', () => {
      document.querySelector('#entry')!.scrollIntoView({ behavior: 'smooth' });
    });
    this.elementRef.nativeElement.querySelector('#contact-us').addEventListener('click', () => {
      document.querySelector('#end')!.scrollIntoView({ behavior: 'smooth' });
    });
  }
}
