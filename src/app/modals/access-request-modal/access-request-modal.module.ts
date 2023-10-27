import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccessRequestModalComponent } from './access-request-modal.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [AccessRequestModalComponent],
  imports: [
    CommonModule,
    SharedModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
  ],
  exports: [AccessRequestModalComponent],
})
export class AccessRequestModalModule {}
