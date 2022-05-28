import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsRoutingModule } from './forms-routing.module';
import { FormsHomeComponent } from './forms-home/forms-home.component';
import { FormBaseComponent } from './form-base/form-base.component';


@NgModule({
  declarations: [
    FormsHomeComponent,
    FormBaseComponent
  ],
  imports: [
    CommonModule,
    FormsRoutingModule
  ]
})
export class FormsModule { }
