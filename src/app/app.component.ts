import { Component, Renderer2 } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TextDirectionService } from './shared/services/text-direction/text-direction.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(
    private translate: TranslateService,
    private textDirectionService: TextDirectionService,
    private renderer: Renderer2
  ) {
    // TODO: Change default language to Hebrew
    translate.setDefaultLang('en');
    translate.use('en');

    this.textDirectionService.textDirection$.subscribe(dir => {
      this.renderer.setAttribute(document.body, 'dir', dir);
    });
  }
}
