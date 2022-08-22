import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArchiveComponent } from './components/archive/archive.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DisplayComponent } from './components/display/display.component';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { NotesComponent } from './components/notes/notes.component';
import { RegisterComponent } from './components/register/register.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';
import { SigninComponent } from './components/signin/signin.component';
import { TrashComponent } from './components/trash/trash.component';
import { AuthenticationGuard } from './guard/authentication.guard';

const routes: Routes = [
  {path:'register',component:RegisterComponent},
  {path:'',redirectTo:"/signin",pathMatch:'full'},
  {path:'signin',component:SigninComponent},
  {path:'forgotpassword',component:ForgotpasswordComponent},
  {path:'resetpassword',component:ResetpasswordComponent},
  {path:'dashboard',component:DashboardComponent,canActivate:[AuthenticationGuard],
  children:[
    {path:'notes',component:NotesComponent},
    {path:'archive',component:ArchiveComponent},
    {path:'trash',component:TrashComponent},
    {path:'display',component:DisplayComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
