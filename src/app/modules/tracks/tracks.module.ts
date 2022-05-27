import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TracksRoutingModule } from './tracks-routing.module';
import { HistoryTracksComponent } from './pages/history-tracks/history-tracks.component';


@NgModule({
  declarations: [
    HistoryTracksComponent
  ],
  imports: [
    CommonModule,
    TracksRoutingModule
  ]
})
export class TracksModule { }
