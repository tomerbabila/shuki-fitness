import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MyOverlayRef } from '@shared/services';

@Component({
  selector: 'app-access-request-modal',
  templateUrl: './access-request-modal.component.html',
  styleUrls: ['./access-request-modal.component.scss'],
})
export class AccessRequestModalComponent {
  constructor(
    private overlayRef: MyOverlayRef,
    private router: Router
  ) {}

  goToLogin() {
    this.router.navigate(['/login']);
    this.dismiss();
  }

  dismiss() {
    this.overlayRef.close(null);
  }
}
