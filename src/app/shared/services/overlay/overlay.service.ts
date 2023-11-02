import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { ComponentPortal, PortalInjector } from '@angular/cdk/portal';
import { Injectable, Injector } from '@angular/core';
import { OverlayComponent } from '@shared/components/overlay/overlay.component';
import { MyOverlayRef } from './overlay-ref';

@Injectable({ providedIn: 'root' })
export class OverlayService {
  constructor(
    private overlay: Overlay,
    private injector: Injector
  ) {}

  open<R = any, T = any>(content: any, data: T): MyOverlayRef<R> {
    const scrollStrategy = this.overlay.scrollStrategies.block();
    const positionStrategy = this.overlay
      .position()
      .global()
      .centerHorizontally()
      .centerVertically();

    const configs = new OverlayConfig({
      hasBackdrop: true,
      panelClass: ['modal', 'is-active'],
      backdropClass: 'modal-background',
      positionStrategy,
      scrollStrategy,
    });

    const overlayRef = this.overlay.create(configs);
    const myOverlayRef = new MyOverlayRef<R, T>(overlayRef, content, data);
    const injector = this.createInjector(myOverlayRef, this.injector);

    overlayRef.attach(new ComponentPortal(OverlayComponent, null, injector));

    return myOverlayRef;
  }

  createInjector(ref: MyOverlayRef, inj: Injector) {
    const injectorTokens = new WeakMap([[MyOverlayRef, ref]]);
    return new PortalInjector(inj, injectorTokens);
  }
}
