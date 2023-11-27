import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from './icon.component';
import { AngularSvgIconModule } from 'angular-svg-icon';

@NgModule({
  declarations: [IconComponent],
  imports: [CommonModule, AngularSvgIconModule],
  exports: [IconComponent],
})
export class IconModule {}
