import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatDialogModule} from '@angular/material/dialog';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { SigninComponent } from './components/signin/signin.component';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';
import {MatIconModule} from '@angular/material/icon';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import { NotesComponent } from './components/notes/notes.component';
import { ArchiveComponent } from './components/archive/archive.component';
import { TrashComponent } from './components/trash/trash.component';
import { CreateNoteComponent } from './components/create-note/create-note.component';
import { IconsComponent } from './components/icons/icons.component';
import { DisplayComponent } from './components/display/display.component';
import { UpdateComponent } from './components/update/update.component';
import { AuthguardServiceService } from './services/authguard-service.service';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatMenuModule } from '@angular/material/menu';
import { FilterPipe } from './Pipe/filter.pipe';


@NgModule({
  declarations:[
    AppComponent,
    RegisterComponent,
    SigninComponent,
    ForgotpasswordComponent,
    ResetpasswordComponent,
    RegisterComponent,
    SigninComponent,
    DashboardComponent,
    NotesComponent,
    ArchiveComponent,
    TrashComponent,
    CreateNoteComponent,
    IconsComponent,
    DisplayComponent,
    UpdateComponent,
    FilterPipe,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,MatSidenavModule,MatToolbarModule,
    MatListModule,FormsModule,
    MatDialogModule,
    MatSnackBarModule,MatMenuModule
  ],
  providers: [
    AuthguardServiceService 
  ],
  bootstrap: [AppComponent],
  

})
export class AppModule { }
