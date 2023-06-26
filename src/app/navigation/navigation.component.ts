import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  ngOnInit() {
    const canvas = document.getElementsByTagName('canvas')[0];
    const section = document.getElementsByTagName('ul')[0];

    section.addEventListener("mousemove", function(event) {
      event.stopPropagation();
      canvas.dispatchEvent(new MouseEvent("mousemove", event));
    });
  }
}
