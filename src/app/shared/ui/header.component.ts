import { NgForOf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'afb-header',
  standalone: true,
  imports: [RouterLink, NgForOf],
  template: `
    <header>
      <img src="/img/abelfubu.png" alt="Abelfubu logo" />
      <nav>
        <ul>
          <ng-container *ngFor="let link of links">
            <li [routerLink]="link.url">{{ link.text }}</li>
          </ng-container>
        </ul>
      </nav>
    </header>
  `,
  styles: [
    `
      header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem 0;

        & img {
          width: 100px;
        }

        & ul {
          list-style: none;
          display: flex;
        }

        & a {
          /* text-decoration: none; */
          color: inherit;
          cursor: pointer;
        }
      }
    `,
  ],
})
export class HeaderComponent {
  protected readonly links = [
    { text: 'Home', url: '/' },
    { text: 'Blog', url: '/blog' },
  ];
}
