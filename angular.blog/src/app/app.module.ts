import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainPageComponent } from './main-page/main-page.component';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { AdminComponent } from './admin/admin.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { UserComponent } from './user/user.component';
import { NavbarAdminComponent } from './navbar-admin/navbar-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    MainPageComponent,
    BlogPageComponent,
    AboutMeComponent,
    AdminComponent,
    CreatePostComponent,
    UserComponent,
    NavbarAdminComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
