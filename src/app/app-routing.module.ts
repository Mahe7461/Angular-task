import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent} from './home/home.component';
import { LoginComponent} from './login/login.component';
import { CommentComponent} from './comment/comment.component';
import { LoginfromsComponent} from './loginfroms/loginfroms.component'

const routes: Routes = [
  {path:"home", component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:"comment",component:CommentComponent},
  {path:'loginfroms',component:LoginfromsComponent},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
