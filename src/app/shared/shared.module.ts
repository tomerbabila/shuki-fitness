import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from './components/header/header.module';
import { TranslateModule } from '@ngx-translate/core';
import { TimestampToTimePipe } from './pipes/timestamp-to-time.pipe';
import { NgLetDirective } from './directives/ng-let.directive';
import { OverlayModule } from './components/overlay/overlay.module';

@NgModule({
  imports: [CommonModule],
  declarations: [TimestampToTimePipe, NgLetDirective],
  exports: [
    TranslateModule,
    HeaderModule,
    OverlayModule,
    TimestampToTimePipe,
    NgLetDirective,
  ],
})
export class SharedModule {}
