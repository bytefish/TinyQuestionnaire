import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-health-questionnaire',
  templateUrl: './health-questionnaire.component.html',
  styleUrls: ['./health-questionnaire.component.css']
})
export class HealthQuestionnaireComponent {
  
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
