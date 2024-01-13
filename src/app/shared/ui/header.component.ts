import { NgForOf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'afb-header',
  standalone: true,
  imports: [RouterLink, NgForOf, RouterLinkActive],
  template: `
    <header class="flex justify-content-between align-items-center py-2">
      <img src="/img/abelfubu.png" alt="Abelfubu logo" class="w-2" />
      <nav>
        <ul class="flex list-none">
          @for (link of links; track link.id) {
            <li>
              <a
                style="color: inherit"
                class="no-underline weight font-bold"
                [routerLink]="link.url"
                routerLinkActive="text-blue-400"
                [routerLinkActiveOptions]="{ exact: true }"
              >
                {{ link.text }}
              </a>
            </li>
          }
        </ul>
      </nav>
    </header>
  `,
})
export class HeaderComponent {
  protected readonly links = [
    { id: 1, text: 'Home', url: '/' },
    { id: 2, text: 'Blog', url: '/blog' },
  ];
}
