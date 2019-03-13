import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { main_ROUTE } from './main.route';
import { MainComponent } from './main.component';
import { HomeComponent } from './home/home.component';
import { ComponentModule } from './component/component.module';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';
import { MainService } from './main.service';
import { AppService } from '../app.service';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
@NgModule({
    imports: [
        CommonModule,
        NgbModule,
        NgbCarouselModule,
        ComponentModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot( main_ROUTE , { useHash: true }),
    ],
    declarations: [
        MainComponent,
        HomeComponent,
        AboutComponent,
        ProductsComponent,
        ContactComponent
    ],
    providers: [
        MainService,
        AppService,
    ],
    exports: [
        MainComponent
    ]
})

export class MainModule {}
