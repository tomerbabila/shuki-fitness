import { TemplateRef, Type } from '@angular/core';
import { OverlayRef } from '@angular/cdk/overlay';
import { Subject } from 'rxjs';

export interface OverlayCloseEvent<R> {
  type: 'backdropClick' | 'close';
  data: R | null | undefined;
}

// R = Response Data Type, T = Data passed to Modal Type
export class MyOverlayRef<R = any, T = any> {
  afterClosed$ = new Subject<OverlayCloseEvent<R>>();

  constructor(
    public overlay: OverlayRef,
    public content: string | TemplateRef<any> | Type<any>,
    public data: T
  ) {
    overlay.backdropClick().subscribe(() => this._close('backdropClick', null));
  }

  close(data?: R) {
    this._close('close', data);
  }

  private _close(type: 'backdropClick' | 'close', data: R | null | undefined) {
    this.overlay.dispose();
    this.afterClosed$.next({ type, data });

    this.afterClosed$.complete();
  }
}
