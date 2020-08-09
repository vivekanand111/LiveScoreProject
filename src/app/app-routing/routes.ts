import { Routes } from '@angular/router';

import { LivematchesComponent }from '../livematches/livematches.component';
import { PrevmatchesComponent } from '../prevmatches/prevmatches.component';
import { AdminloginComponent } from '../adminlogin/adminlogin.component';
import { AdmindashboardComponent } from '../admindashboard/admindashboard.component';
import { CreatematchComponent } from '../creatematch/creatematch.component';
import { EditscoreComponent } from '../editscore/editscore.component';
import { MatchdetailsComponent } from '../matchdetails/matchdetails.component';
import { StatisticsComponent } from '../statistics/statistics.component';

export const routes: Routes = [
    { path: 'livematches', component: LivematchesComponent },
    { path: 'prevmatches', component: PrevmatchesComponent },
    { path: 'adminlogin', component: AdminloginComponent },
    { path: 'admindashboard', component: AdmindashboardComponent },
    { path: 'creatematch', component: CreatematchComponent },
    { path: 'editscore/:id', component: EditscoreComponent },
    { path: 'matchdetail/:id', component: MatchdetailsComponent },
    { path: 'statistics/:id', component: StatisticsComponent },
    { path: '', redirectTo: '/livematches', pathMatch: 'full' }
];