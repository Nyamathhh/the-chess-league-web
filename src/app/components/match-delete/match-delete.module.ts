import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatchDeleteComponent } from './match-delete.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MatchDeleteComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    MatchDeleteComponent
  ]
})
export class MatchDeleteModule { }
