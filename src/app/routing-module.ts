import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { GethubFolowersComponent } from './gethub-folowers/gethub-folowers.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PostsComponent } from './posts/posts.component';
import { ProfileFollowerComponent } from './profile-follower/profile-follower.component';

const routes: Routes = [
  {path:"contact",
  component:ContactFormComponent
},
  {path:"home",
  component:HomePageComponent
},
  {path:"posts",
  component:PostsComponent
},
  {path:"followers",
  component:GethubFolowersComponent
},

  {path:"followers/:id/:username",
  component:ProfileFollowerComponent
},
{path:"**",
component:HomePageComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
