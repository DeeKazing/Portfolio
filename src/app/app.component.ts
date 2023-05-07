import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Portfolio';

  drops: { left: string; duration: string }[] = [];
  layers: any[] = [];
  ngOnInit(): void {
    for (let i = 0; i < 60; i++) {
      this.layers.push({});
    }
    // Generate random drops
    for (let i = 0; i < 100; i++) {
      this.drops.push({
        left: Math.floor(Math.random() * window.innerWidth) + 'px',
        duration: (Math.random() * 2 + 1).toFixed(1) + 's',
      });
    }
  }
}
