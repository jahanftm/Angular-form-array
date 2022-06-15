import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-skills',
  templateUrl: './form-skills.component.html',
  styleUrls: ['./form-skills.component.scss']
})
export class FormSkillsComponent implements OnInit {

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
      this.emitForm(this.form.getRawValue());
    });
  }

  createItem(): FormGroup {
    return this.fb.group({
      skill: [null, Validators.required],
      description: null
    });
  }

  addItems(): void {
    const items = this.form.get('items') as FormArray;
    items.push(this.createItem());
    this.form.setControl('items', items);
  }

  removeItem(): void {
    const items = this.form.get('items') as FormArray;
    if (items.length > 1) {
      items.removeAt(items.length - 1);
      this.form.setControl('items', items);
    }
  }

  emitForm(form): void {
    this.form.valid ? this.changeForm.emit(form) : this.changeForm.emit(null);
  }

}
