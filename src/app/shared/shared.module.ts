import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from './components/header/header.module';
import { TranslateModule } from '@ngx-translate/core';
import { TimestampToTimePipe } from './pipes/timestamp-to-time.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [TimestampToTimePipe],
  exports: [TranslateModule, HeaderModule, TimestampToTimePipe],
})
export class SharedModule {}
