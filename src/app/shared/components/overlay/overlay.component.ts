import { Component, OnInit } from '@angular/core';
import { MyOverlayRef } from '@shared/services/overlay/overlay-ref';

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.scss'],
})
export class OverlayComponent implements OnInit {
  content!: any;

  constructor(private ref: MyOverlayRef) {}

  ngOnInit() {
    this.content = this.ref.content;
  }

  close() {
    this.ref.close(null);
  }
}
