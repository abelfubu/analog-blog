import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'afb-header',
  standalone: true,
  imports: [RouterLink],
  template: `
    <header>
      <img src="/img/abelfubu.png" alt="Abelfubu logo" />
      <nav>
        <ul>
          <li><a routerLink="/">Home</a></li>
          <li><a routerLink="/blog">Blog</a></li>
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
export class HeaderComponent {}
