import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-completion',
  templateUrl: './completion.component.html',
  styleUrls: ['./completion.component.less'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class CompletionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
