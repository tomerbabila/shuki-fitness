import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TextDirectionEnum } from './text-direction.types';
import { rtlLanguages } from './text-direction.constants';

@Injectable({ providedIn: 'root' })
export class TextDirectionService {
  private _textDirection = new BehaviorSubject(TextDirectionEnum.ltr);
  public readonly textDirection$ = this._textDirection.asObservable();

  constructor() {
    this.checkDirection();
  }

  checkDirection() {
    const lang = 'he'; // TODO: add localStorage support here

    if (this.isRtl(lang)) {
      this._textDirection.next(TextDirectionEnum.rtl);
    } else {
      this._textDirection.next(TextDirectionEnum.ltr);
    }
  }

  private isRtl(lang: string) {
    return rtlLanguages.includes(lang);
  }
}
