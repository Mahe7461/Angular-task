import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent} from './home/home.component';
import { LoginComponent} from './login/login.component';
import { CommentComponent} from './comment/comment.component';
import { LoginfromsComponent} from './loginfroms/loginfroms.component';
import { DataComponent } from './data/data.component';


const routes: Routes = [
  {path:"home", component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:"comment",component:CommentComponent},
  {path:'loginfroms',component:LoginfromsComponent},
  {path:'loginfroms/:name',component:LoginfromsComponent},
  {path:'data',component:DataComponent}

  
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents =[LoginfromsComponent,HomeComponent,CommentComponent,DataComponent]