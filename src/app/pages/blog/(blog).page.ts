import { injectContentFiles } from '@analogjs/content';
import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

export interface PostAttributes {
  title: string;
  slug: string;
  description: string;
  coverImage: string;
}

@Component({
  selector: 'afb-blog',
  standalone: true,
  imports: [RouterOutlet, RouterLink, NgFor],
  template: `
    <h1>Blog Component</h1>
    <ul>
      <li *ngFor="let post of posts">
        <a [routerLink]="['/blog', 'posts', post.slug]">{{
          post.attributes.title
        }}</a>
      </li>
    </ul>
  `,
})
export default class BlogComponent {
  readonly posts = injectContentFiles<PostAttributes>((contentFiles) =>
    contentFiles.filename.includes('src/content')
  );
}
