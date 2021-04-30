import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { NgCircleProgressModule } from 'ng-circle-progress';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatTabsModule} from '@angular/material/tabs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistationFormComponent } from './StudentRegistation/registation-form/registation-form.component';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import { LoginComponent } from './login/login.component';
import { StudentinfoComponent } from './StudentRegistation/studentinfo/studentinfo.component';
import { StudentTimeTableComponent } from './StudentRegistation/student-time-table/student-time-table.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    RegistationFormComponent,
    LoginComponent,
    StudentinfoComponent,
    StudentTimeTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatSidenavModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatProgressBarModule,
    MatTabsModule,
    MatRadioModule,
    MatTableModule,
    FormsModule, MatSelectModule,
    MatFormFieldModule,
    HttpClientModule,
 NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 50,
      outerStrokeWidth: 8,
      innerStrokeWidth: 8,
      outerStrokeColor: '#ad14a8',
      innerStrokeColor: '#C7E596',
      animationDuration: 300,
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
