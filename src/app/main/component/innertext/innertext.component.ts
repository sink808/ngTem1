import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-innertext',
  templateUrl: './innertext.component.html'
})

export class InnertextComponent implements OnInit {
  @Input() innertext: Array<Object>;

  ngOnInit() {
  }

}
