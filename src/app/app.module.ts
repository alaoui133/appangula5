import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { CoursesService } from './courses.service';
import { ResumePipe } from './resume.pipe';
import { ShortpPipe } from './shortp.pipe';
import { FavoriteComponent } from './favorite/favorite.component';
import { PanelComponent } from './panel/panel.component';
import { InputFormatDirective } from './input-format.directive';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { PostsComponent } from './posts/posts.component';
import {HttpClientModule} from '@angular/common/http'
import { PostService } from './sevices/post.service';
import { DataService } from './sevices/data.service';
import { GethubFolowersComponent } from './gethub-folowers/gethub-folowers.component';
import { RoutingModule } from './routing-module';
import { GithubFolowersService } from './github-folowers.service';
import { NavbarComponent } from './navbar/navbar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProfileFollowerComponent } from './profile-follower/profile-follower.component';






@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    ResumePipe,
    ShortpPipe,
    FavoriteComponent,
    PanelComponent,
    InputFormatDirective,
    ContactFormComponent,
    SignupFormComponent,
    PostsComponent,
    GethubFolowersComponent,
    NavbarComponent,
    HomePageComponent,
    ProfileFollowerComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RoutingModule
    
  ],
  providers: [CoursesService,PostService,DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
