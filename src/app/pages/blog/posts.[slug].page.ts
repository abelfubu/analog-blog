import { injectContent, MarkdownComponent } from '@analogjs/content';
import { AsyncPipe, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Meta, MetaDefinition, Title } from '@angular/platform-browser';
import { tap } from 'rxjs';

export interface PostAttributes {
  title: string;
  slug: string;
  description: string;
  coverImage: string;
  meta: MetaDefinition[];
}

@Component({
  selector: 'afb-post',
  standalone: true,
  imports: [MarkdownComponent, AsyncPipe, NgIf],
  template: `
    @if (post$ | async; as post) {
      <h1>{{ post.attributes.title }}</h1>
      <analog-markdown [content]="post.content"></analog-markdown>
    }
  `,
})
export default class BlogPostComponent {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  readonly post$ = injectContent<PostAttributes>().pipe(
    tap((post) => {
      this.title.setTitle(post.attributes.title);
      this.meta.addTags(post.attributes.meta);
    }),
  );
}
