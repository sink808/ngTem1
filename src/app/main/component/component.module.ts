import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselComponent } from './carousel/carousel.component';
import { InnertextComponent } from './innertext/innertext.component';

@NgModule({
    imports: [
        CommonModule,
        NgbModule,
        NgbCarouselModule,
    ],
    declarations: [
        CarouselComponent,
        InnertextComponent
    ],
    exports: [
        CarouselComponent,
        InnertextComponent
    ]
})

export class ComponentModule {}
