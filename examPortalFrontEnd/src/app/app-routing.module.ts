import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoryComponent } from './pages/admin/add-category/add-category.component';
import { AddQueastionComponent } from './pages/admin/add-queastion/add-queastion.component';
import { AddQuizeComponent } from './pages/admin/add-quize/add-quize.component';
import { AdmindashboardComponent } from './pages/admin/admindashboard/admindashboard.component';
import { UpdateQuizComponent } from './pages/admin/update-quiz/update-quiz.component';
import { ViewCategoryComponent } from './pages/admin/view-category/view-category.component';
import { ViewQueastionsComponent } from './pages/admin/view-queastions/view-queastions.component';
import { ViewQuizesComponent } from './pages/admin/view-quizes/view-quizes.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ExamInstructionComponent } from './pages/NormalUser/exam-instruction/exam-instruction.component';
import { LoadQuizComponent } from './pages/NormalUser/load-quiz/load-quiz.component';
import { StartExamComponent } from './pages/NormalUser/start-exam/start-exam.component';
import { UserdashboardComponent } from './pages/NormalUser/userdashboard/userdashboard.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SigupComponent } from './pages/sigup/sigup.component';
import { AdminGuardGuard } from './services/admin-guard.guard';
import { NormalGuardGuard } from './services/normal-guard.guard';

const routes: Routes = [
  {
    path: 'signup',
   component: SigupComponent,
   pathMatch: 'full'


  },
  {
    path:'login',
    component:LoginComponent,
    pathMatch:'full'
  },
  {
    path:'home',
    component:HomeComponent,
    pathMatch:'full'

  },
  {
    path: 'admin',
    component:AdmindashboardComponent,
    
    canActivate:[AdminGuardGuard],

    children:[
      {
        path:'profile',
        component:ProfileComponent
      },
      {
        path:'',
        component:WelcomeComponent
      }
      ,
      {
        path:'categories',
        component:ViewCategoryComponent
      },
      {
        path:'addCategory',
        component:AddCategoryComponent
      },
      {
        path:'quizes',
        component:ViewQuizesComponent
      },

      {
        path:'addQuiz',
        component:AddQuizeComponent
      },
      {
        path:'updateQuiz/:qid',
        component:UpdateQuizComponent
      },
      {
        path:'queastions/:id/:title',
        component:ViewQueastionsComponent

      },
      {
        path:'addQueastion/:qizId/:title',
        component:AddQueastionComponent
        
      }
    ]

  },

  {
    path: 'user',
    component:UserdashboardComponent,
    
    canActivate:[NormalGuardGuard],
    children:[
     {
      path:':catId',
      component:LoadQuizComponent
     },
     {
      path:'instruction/:quizId',
      component:ExamInstructionComponent
     }
    
    ]
    
  },
  {
    path:'starting-exam/:quizId',
    component:StartExamComponent,
    canActivate:[NormalGuardGuard]
   }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
