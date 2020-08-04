import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'lcd-product-alert',
  template: `
    <p *ngIf="!product.available">
      <button (click)="notify.emit()">Notify Me</button>
    </p>
  `,
  styles: [
  ]
})
export class ProductAlertComponent implements OnInit {
  @Input() product;
  @Output() notify = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
