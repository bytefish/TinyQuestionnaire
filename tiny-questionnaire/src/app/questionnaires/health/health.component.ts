import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css']
})
export class HealthComponent {
  
  submitted: boolean = false;

  onSubmit(form: NgForm): void {
    return;
  }

  onClick(form: NgForm): void {
    this.submitted = true;

    const json = JSON.stringify(form.value);

    console.log(json);

  }

  
}
