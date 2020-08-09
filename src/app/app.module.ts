import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider'; 
import { FlexLayoutModule } from '@angular/flex-layout';


import { AppComponent } from './app.component';
import 'hammerjs';

import { AdminheaderComponent } from './adminheader/adminheader.component';
import { CreatematchComponent } from './creatematch/creatematch.component';
import { EditscoreComponent } from './editscore/editscore.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { MatchdetailsComponent } from './matchdetails/matchdetails.component'; 
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LivematchesComponent } from './livematches/livematches.component';
import { PrevmatchesComponent } from './prevmatches/prevmatches.component';

import { MatchService } from './services/match.service';
import { ProcessHTTPMsgService } from './services/process-httpmsg.service';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { AdminloginComponent } from './adminlogin/adminlogin.component';


import { baseURL } from './shared/baseurl';
import { HighlightDirective } from './directives/highlight.directive';
import { StatisticsComponent } from './statistics/statistics.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    LivematchesComponent,
    PrevmatchesComponent,
    AdminloginComponent,
    HeaderComponent,
    FooterComponent,
    AdminheaderComponent,
    CreatematchComponent,
    EditscoreComponent,
    AdmindashboardComponent,
    MatchdetailsComponent,
    HighlightDirective,
    StatisticsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule, 
    MatInputModule,
    MatCheckboxModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatProgressSpinnerModule,
    ChartsModule
  ],
  providers: [
    MatchService,
    ProcessHTTPMsgService,
    {provide: 'BaseURL', useValue: baseURL}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
