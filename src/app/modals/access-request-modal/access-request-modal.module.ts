import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccessRequestModalComponent } from './access-request-modal.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [AccessRequestModalComponent],
  imports: [CommonModule, SharedModule, MatCardModule, MatButtonModule],
  exports: [AccessRequestModalComponent],
})
export class AccessRequestModalModule {}
