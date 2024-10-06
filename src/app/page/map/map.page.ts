import { Component } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage {

  // Placeholder function to prevent errors
  scrollToSection(sectionId: string) {
    console.log(`Scroll to section: ${sectionId}`);
  }
}

