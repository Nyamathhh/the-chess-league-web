import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeagueListComponent } from './league-list.component';

@NgModule({
  declarations: [
    LeagueListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LeagueListComponent
  ]
})
export class LeagueListModule { }
