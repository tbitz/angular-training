import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  isSubmitted: boolean = false;
  @ViewChild('myForm') theForm: NgForm = {} as NgForm;

  validate(name: string): boolean {
    return this.isSubmitted && this.theForm.form.controls[name].invalid;
  }
  handleSubmit(myForm: any) {
    if (myForm.form.invalid) {
      this.isSubmitted = true;
      return;
    }
    console.log(myForm);
  }
}
