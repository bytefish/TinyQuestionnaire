import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css']
})
export class HealthComponent {
  
  onSubmit(form: NgForm): void {
    const json = JSON.stringify(form.value);

    console.log(json);
  }
}
