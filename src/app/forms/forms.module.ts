import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsRoutingModule } from './forms-routing.module';
import { FormsHomeComponent } from './forms-home/forms-home.component';
import { FormBaseComponent } from './form-base/form-base.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormSkillsComponent } from './form-base/form-skills/form-skills.component';
import { FormProjectsComponent } from './form-base/form-projects/form-projects.component';


@NgModule({
  declarations: [
    FormsHomeComponent,
    FormBaseComponent,
    FormSkillsComponent,
    FormProjectsComponent
  ],
  imports: [
    CommonModule,
    FormsRoutingModule,
    ReactiveFormsModule
  ]
})
export class FormsModule { }
