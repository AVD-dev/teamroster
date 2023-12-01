import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

const MODULES = [CommonModule, FormsModule, ReactiveFormsModule];

const NG_MODULES = [ButtonModule, InputTextModule];

@NgModule({
  declarations: [],
  imports: [...MODULES, ...NG_MODULES],
  exports: [...MODULES, ...NG_MODULES],
})
export class SharedModule {}
