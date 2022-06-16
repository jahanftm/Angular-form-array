import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-projects',
  templateUrl: './form-projects.component.html',
  styleUrls: ['./form-projects.component.scss']
})
export class FormProjectsComponent implements OnInit {

  form: FormGroup;

  @Output()
  changeForm: EventEmitter<any> = new EventEmitter();

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      items: this.fb.array([this.createItem()])
    });
  }

  ngOnInit(): void {
    this.form.valueChanges.subscribe(data => {
      this.changeForm.emit(this.form.getRawValue());
    });
  }

  createItem(): FormGroup {
    return this.fb.group({
      project: [null, Validators.required],
      date: [null, Validators.required],
      description: null,
    });
  }

  addItem(): void {
    const items = this.form.get('items') as FormArray;
    items.push(this.createItem());
    this.form.setControl('items', items);
  }

  removeItem(): void {
    const items = this.form.get('items') as FormArray;
    if (items.length > 1) {
      items.removeAt(items.length - 1);
    }
    this.form.setControl('items', items);
  }

  emitForm(form): void {
    this.form.valid ? this.changeForm.emit(form) : this.changeForm.emit(null);
  }
}
