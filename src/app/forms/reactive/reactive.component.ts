import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrl: './reactive.component.css',
})
export class ReactiveComponent {
  form: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      email: ['', Validators.compose([Validators.email, Validators.required])],
      username: [
        '',
        Validators.compose([Validators.required, Validators.minLength(3)]),
      ],
      password: ['', Validators.required],
    });
  }

  getMessage(control: any) {
    console.log('control', control);
    const message = '';
    if (!control.touched) return 'Please enter an email address';
    if (control.status === 'INVALID') return 'Please enter a valid email';
    return 'Invalid';
  }
  handleSubmit() {
    this.submitted = true;
    console.log(this.form);
    console.log(this.fb);
  }
}
