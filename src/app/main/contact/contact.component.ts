import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html'
})

export class ContactComponent implements OnInit {
  public data = {
    name : '',
    email: '',
    department: '',
    comment: ''
  };
  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  public submit(): void {
    alert('Finished.');
    this.router.navigate(['/main/home']);
  }

}
