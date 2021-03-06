import { CoreModule } from './core/core.module';
import { environment } from './../environments/environment.prod';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';


import { AppComponent } from './app.component';
import { BsNavbarComponent } from './core/components/bs-navbar/bs-navbar.component';
import { HomeComponent } from './core/components/home/home.component';
import { RouterModule } from '@angular/router';
import { DefectFormComponent } from './shared/components/defect-form/defect-form.component';
import { DefectListComponent } from './shared/components/defect-list/defect-list.component';
import { DefectService } from './shared/services/defect.service';


@NgModule({
  declarations: [
    AppComponent,
    DefectFormComponent,
    DefectListComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    RouterModule.forRoot([
      {
        path: '', 
      component: DefectListComponent
      },
      { 
        path: 'defects/new', 
        component: DefectFormComponent,
      }

    ])
  ],
  providers: [DefectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
