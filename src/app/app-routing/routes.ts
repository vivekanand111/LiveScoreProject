import { Routes } from '@angular/router';

import { LivematchesComponent }from '../livematches/livematches.component';
import { PrevmatchesComponent } from '../prevmatches/prevmatches.component';
import { AdminloginComponent } from '../adminlogin/adminlogin.component';
import { AdmindashboardComponent } from '../admindashboard/admindashboard.component';
import { CreatematchComponent } from '../creatematch/creatematch.component';
import { EditscoreComponent } from '../editscore/editscore.component';
import { ChangestatusComponent } from '../changestatus/changestatus.component';
import { FinishmatchComponent } from '../finishmatch/finishmatch.component';
import { ScorecardComponent } from '../scorecard/scorecard.component';

export const routes: Routes = [
    { path: 'livematches', component: LivematchesComponent },
    { path: 'prevmatches', component: PrevmatchesComponent },
    { path: 'adminlogin', component: AdminloginComponent },
    { path: 'admindashboard', component: AdmindashboardComponent },
    { path: 'creatematch', component: CreatematchComponent },
    { path: 'editscore', component: EditscoreComponent },
    { path: 'changestatus', component: ChangestatusComponent },
    { path: 'finishmatch', component: FinishmatchComponent },
    { path: 'scorecard', component: ScorecardComponent },
    { path: '', redirectTo: '/livematches', pathMatch: 'full' }
];