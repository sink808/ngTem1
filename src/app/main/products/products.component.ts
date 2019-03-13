import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html'
})

export class ProductsComponent implements OnInit {
  private imgNum = new Array(32);
  images: Array<string>;
  ngOnInit() {

    for (let i = 0; i < 32; i++) {
      this.imgNum[i] = i;
    }

    this.images = this.imgNum.map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
  }

}
