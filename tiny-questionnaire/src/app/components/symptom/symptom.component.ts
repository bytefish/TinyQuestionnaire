import { Component, SkipSelf, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

@Component({
  selector: 'app-symptom',
  templateUrl: './symptom.component.html',
  styleUrls: ['./symptom.component.css'],
  viewProviders: [{
    provide: ControlContainer,
    useFactory: (container: ControlContainer) => container,
    deps: [[new SkipSelf(), ControlContainer]],
  }]
})
export class SymptomComponent {

  @Input() modelGroupName: string;

  selectedItems: Array<string> = [];
  selectedUnit: string = 'celsius';

  handleSelection(selectedItems: Array<string>): void {
    this.selectedItems = selectedItems;
  }
}
