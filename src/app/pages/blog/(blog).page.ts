import { injectContentFiles } from '@analogjs/content';
import { JsonPipe, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

export interface PostAttributes {
  title: string;
  slug: string;
  tags: string[];
  date: string;
  description: string;
  coverImage: string;
}

@Component({
  selector: 'afb-blog',
  standalone: true,
  imports: [RouterOutlet, RouterLink, NgFor, JsonPipe],
  template: `
    <h1>Blog</h1>
    <ul>
      @for (post of posts; track post.filename) {
        <li>
          <img
            src="/img/{{ post.attributes.coverImage }}"
            [alt]="post.attributes.title"
          />
          <a [routerLink]="['/blog', 'posts', post.slug]">{{
            post.attributes.title
          }}</a>

          @for (tag of post.attributes.tags; track tag) {
            <p>{{ tag }}</p>
          }

          <p>{{ post | json }}</p>
        </li>
      }
    </ul>
  `,
})
export default class BlogComponent {
  readonly posts = injectContentFiles<PostAttributes>((contentFiles) =>
    contentFiles.filename.includes('src/content'),
  );
}
