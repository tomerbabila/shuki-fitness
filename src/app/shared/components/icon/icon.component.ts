import { Component, Input } from '@angular/core';
import { Icon, icons } from './icons';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
})
export class IconComponent {
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() set name(value: Icon) {
    this._src = icons[value] || '';
  }

  _src = '';
}
