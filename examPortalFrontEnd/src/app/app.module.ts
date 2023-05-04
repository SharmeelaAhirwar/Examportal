import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';

import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SigupComponent } from './pages/sigup/sigup.component';
import { LoginComponent } from './pages/login/login.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import{HttpClientModule, HTTP_INTERCEPTORS} from'@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { HomeComponent } from './pages/home/home.component';
import { AuthInterCeptor, AuthInterceptorProviders } from './services/auth.interceptor';
import { AdmindashboardComponent } from './pages/admin/admindashboard/admindashboard.component';
import { UserdashboardComponent } from './pages/NormalUser/userdashboard/userdashboard.component';
import { ProfileComponent } from './pages/profile/profile.component';
import {MatListModule} from '@angular/material/list';
import { SidebarComponent } from './pages/admin/sidebar/sidebar.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import {MatTableModule} from '@angular/material/table';
import { ViewCategoryComponent } from './pages/admin/view-category/view-category.component';
import { AddCategoryComponent } from './pages/admin/add-category/add-category.component';
import { AddQuizeComponent } from './pages/admin/add-quize/add-quize.component';
import { ViewQuizesComponent } from './pages/admin/view-quizes/view-quizes.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSelectModule} from '@angular/material/select';
import { UpdateQuizComponent } from './pages/admin/update-quiz/update-quiz.component';
import { ViewQueastionsComponent } from './pages/admin/view-queastions/view-queastions.component';
import { AddQueastionComponent } from './pages/admin/add-queastion/add-queastion.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { UserSidebarComponent } from './pages/NormalUser/user-sidebar/user-sidebar.component';
import { LoadQuizComponent } from './pages/NormalUser/load-quiz/load-quiz.component';
import { ExamInstructionComponent } from './pages/NormalUser/exam-instruction/exam-instruction.component';
import { StartExamComponent } from './pages/NormalUser/start-exam/start-exam.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { NgxUiLoaderModule,NgxUiLoaderHttpModule } from 'ngx-ui-loader';


@NgModule({
  declarations: [
    AppComponent,

    NavbarComponent,
    FooterComponent,
    SigupComponent,
    LoginComponent,
    HomeComponent,
    AdmindashboardComponent,
    UserdashboardComponent,
    ProfileComponent,
    SidebarComponent,
    WelcomeComponent,
    ViewCategoryComponent,
    AddCategoryComponent,
    AddQuizeComponent,
    ViewQuizesComponent,
    UpdateQuizComponent,
    ViewQueastionsComponent,
    AddQueastionComponent,
    UserSidebarComponent,
    LoadQuizComponent,
    ExamInstructionComponent,
    StartExamComponent,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatSlideToggleModule,
    MatSelectModule,
    CKEditorModule,
    MatProgressSpinnerModule,
    NgxUiLoaderModule,
    NgxUiLoaderHttpModule.forRoot({
      showForeground:true
    })
    
   
  ],
  providers: [AuthInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
