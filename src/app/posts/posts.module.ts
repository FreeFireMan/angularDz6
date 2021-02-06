import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './components/posts/posts.component';
import { PostComponent } from './components/post/post.component';
import {PostsService} from "./services/posts.service";
import {PostsRoutingModule} from "./posts-routing.module";
import {HttpClientModule} from "@angular/common/http";



@NgModule({
  declarations: [PostsComponent, PostComponent],
  imports: [
    CommonModule,
    PostsRoutingModule,
    HttpClientModule

  ],

  providers: [PostsService]
})
export class PostsModule { }
