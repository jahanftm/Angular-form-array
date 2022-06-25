import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-form-base',
  templateUrl: './form-base.component.html',
  styleUrls: ['./form-base.component.scss']
})
export class FormBaseComponent implements OnInit {

  form: FormGroup | any;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit(): void {
  }

  createForm(): void {
    this.form = this.fb.group({
      name: [null, [Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]],
      family: [null, [Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]],
      type: 'select an option'
    });
  }

  // validateName(val: string): boolean {
  //   return /[a-zA-Z]/.test(val);
  // }

  select(evt: any): void {
    console.log(evt.target.value);
  }

  changeForm(val): void {
    console.log(val);
  }
}
