import { Component, Renderer2 } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TextDirectionService } from '@shared/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(
    translate: TranslateService,
    textDirectionService: TextDirectionService,
    renderer: Renderer2
  ) {
    // TODO: Change default language to Hebrew
    translate.setDefaultLang('en');
    translate.use('en');

    textDirectionService.textDirection$.subscribe(dir => {
      renderer.setAttribute(document.body, 'dir', dir);
    });
  }
}
