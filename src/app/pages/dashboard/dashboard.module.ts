import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { PersonalChatComponent } from './components/personal-chat/personal-chat.component';
import { ChatAiComponent } from './components/chat-ai/chat-ai.component';
import { NgxSpinnerModule } from 'ngx-spinner';
const routes: Routes = [
  {
    path:'', component:DashboardComponent
  },
  {
    path:'personal-chat', component:PersonalChatComponent
  }
];

@NgModule({
  declarations: [
    DashboardComponent,
    PersonalChatComponent,
    ChatAiComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    NgxSpinnerModule,
  
    RouterModule.forChild(routes)
  ]
})
export class DashboardModule { }
