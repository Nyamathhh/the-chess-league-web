import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatchUpdateComponent } from './match-update.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MatchUpdateComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    MatchUpdateComponent
  ]
})
export class MatchUpdateModule { }
