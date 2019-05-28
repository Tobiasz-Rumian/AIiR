import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { StatusComponent } from './status/status.component';
import {RouterModule, Routes} from '@angular/router';
import { MainComponent } from './main/main.component';
import {FormsModule} from '@angular/forms';

const appRoutes: Routes = [
  { path: '', component: MainComponent },
  { path: '**', component: MainComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    TaskComponent,
    NewTaskComponent,
    StatusComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
