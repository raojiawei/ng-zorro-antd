import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nz-demo-input-number-basic',
  template: `
    <nz-input-number [(ngModel)]="demoValue" [nzMin]="1" [nzMax]="10" [nzStep]="1"></nz-input-number>
  `,

  styles: []
})
export class NzDemoInputNumberBasicComponent implements OnInit {
  demoValue = 3;

  constructor() {
  }

  ngOnInit() {
  }
}

