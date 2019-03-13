import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html'
})

export class CarouselComponent implements OnInit {
  @Input() carouselData: Array<Object>;

  ngOnInit() {
  }

}
