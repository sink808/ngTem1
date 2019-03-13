import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from './main.service';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html'
})
export class MainComponent implements OnInit {
    selected = 'home';
    constructor(private mainService: MainService,
                private router: Router) {
    }

    ngOnInit(): void {
        this.router.navigate(['/main/home']);
    }

    addClass(id: any): void {
        console.log(id);
        this.selected = id;
    }

}
