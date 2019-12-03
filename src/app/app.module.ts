import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import {Routes, RouterModule} from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { ForgotpassComponent } from './forgotpass/forgotpass.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { ChangepassComponent } from './changepass/changepass.component';
import { ChangeinfoComponent } from './changeinfo/changeinfo.component';
import { CreatecourseComponent } from './createcourse/createcourse.component';
import { ChangecoureComponent } from './changecoure/changecoure.component';
import { AllcoursesComponent } from './allcourses/allcourses.component';
import { ExampleofcoursesComponent } from './exampleofcourses/exampleofcourses.component';
import { EndofcourseComponent } from './endofcourse/endofcourse.component';
import { StartofcourseComponent } from './startofcourse/startofcourse.component';


const routes:Routes = [
{path: 'home1', component: HomeComponent},
{path: 'contact', component: ContactComponent},
{path: 'changecourse', component: ChangecoureComponent},
{path: 'createcourse', component: CreatecourseComponent},
{path: 'allcourse', component: AllcoursesComponent},
{path: 'registration', component: RegistrationComponent},
{path: 'login', component: LoginComponent},
{path: 'changecourse', component: ChangepassComponent},
{path: 'forgotpass', component: ForgotpassComponent},
{path: 'userprofile', component: UserprofileComponent},
{path: 'changepass', component: ChangepassComponent},
{path: 'changepass', component: ChangepassComponent},
{path: 'changeinfo', component: ChangeinfoComponent },
{path: 'newcoure', component: CreatecourseComponent },
{path: 'excourse', component: ExampleofcoursesComponent },
{path: 'startcourse', component: StartofcourseComponent },
{path: 'endcourse', component: EndofcourseComponent}
]



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    RegistrationComponent,
    LoginComponent,
    ForgotpassComponent,
    UserprofileComponent,
    ChangepassComponent,
    ChangeinfoComponent,
    CreatecourseComponent,
    ChangecoureComponent,
    AllcoursesComponent,
    ExampleofcoursesComponent,
    EndofcourseComponent,
    StartofcourseComponent
  ],
  imports: [
    BrowserModule, FormsModule, RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
