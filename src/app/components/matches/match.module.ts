import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatchesComponent } from './matches.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RouterOutlet } from '@angular/router';


@NgModule({
  declarations: [
    MatchesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    RouterOutlet
  ],
  exports: [
    MatchesComponent
  ]
})
export class MatchesModule { }
