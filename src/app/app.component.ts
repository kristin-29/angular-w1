import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularWithKrisi';

  foldSection(event: MouseEvent) {
    const sectionHeader = event.currentTarget as HTMLElement;
    const sectionContent = sectionHeader.nextElementSibling as HTMLElement | null;
  
    if (!sectionContent) return;
  
    const allSections = document.querySelectorAll('.section-content');
    allSections.forEach(section => {
      const sectionElem = section as HTMLElement;
      if (sectionElem !== sectionContent && sectionElem.classList.contains('show')) {
        sectionElem.classList.remove('show');
      }
    });
  
    sectionContent.classList.toggle('show');
  }
  
}
