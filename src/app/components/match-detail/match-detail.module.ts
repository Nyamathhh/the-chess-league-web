import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatchDetailComponent } from './match-detail.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MatchDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    MatchDetailComponent
  ]
})
export class MatchDetailModule { }
