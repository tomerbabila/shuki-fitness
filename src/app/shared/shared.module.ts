import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from './components/header/header.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [CommonModule],
  exports: [HeaderModule, TranslateModule],
})
export class SharedModule {}
