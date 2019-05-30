import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {TaskComponent} from './task/task.component';
import {NewTaskComponent} from './new-task/new-task.component';
import {StatusComponent} from './status/status.component';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from './main/main.component';
import {FormsModule} from '@angular/forms';
import {HeaderComponent} from './header/header.component';
import {TaskInfoComponent} from './home/task-info/task-info.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';

const appRoutes: Routes = [
  {path: '', component: MainComponent},
  {path: 'task/:id', component: TaskComponent},
  {path: 'info', component: StatusComponent},
  {path: 'new', component: NewTaskComponent},
  {path: '**', component: MainComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    TaskComponent,
    NewTaskComponent,
    StatusComponent,
    MainComponent,
    HeaderComponent,
    TaskInfoComponent,
    ProgressBarComponent,
    ProgressBarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
