import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatchCreateComponent } from './match-create.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MatchCreateComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    MatchCreateComponent
  ]
})
export class MatchCreateModule { }
