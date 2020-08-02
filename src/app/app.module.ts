import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatListModule } from '@angular/material/list';

import {MatDividerModule} from '@angular/material/divider'; 
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ReactiveFormsModule } from '@angular/forms';

import { LivematchesComponent } from './livematches/livematches.component';
import { PrevmatchesComponent } from './prevmatches/prevmatches.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {MatTableModule} from '@angular/material/table'; 

import { MatchService } from './services/match.service';
import { AppRoutingModule } from './app-routing/app-routing.module';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';


import { FormsModule } from '@angular/forms';
import { ScorecardComponent } from './scorecard/scorecard.component';
import { GraphComponent } from './graph/graph.component';
import { AdminheaderComponent } from './adminheader/adminheader.component';
import { CreatematchComponent } from './creatematch/creatematch.component';
import { ChangestatusComponent } from './changestatus/changestatus.component';
import { EditscoreComponent } from './editscore/editscore.component';
import { FinishmatchComponent } from './finishmatch/finishmatch.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component'; 

@NgModule({
  declarations: [
    AppComponent,
    LivematchesComponent,
    PrevmatchesComponent,
    AdminloginComponent,
    HeaderComponent,
    FooterComponent,
    ScorecardComponent,
    GraphComponent,
    AdminheaderComponent,
    CreatematchComponent,
    ChangestatusComponent,
    EditscoreComponent,
    FinishmatchComponent,
    AdmindashboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatDividerModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    FlexLayoutModule,
    MatTableModule,
    MatFormFieldModule, 
    MatInputModule,
    MatCheckboxModule,
    FormsModule,
    MatDialogModule,
    MatSelectModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [MatchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
