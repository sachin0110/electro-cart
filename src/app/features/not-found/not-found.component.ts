import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [CommonModule, RouterLink, MatButtonModule, MatIconModule],
  template: `
    <div class="not-found-container">
      <div class="content">
        <mat-icon class="error-icon">error_outline</mat-icon>
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>The page you are looking for doesn't exist or has been moved.</p>
        <div class="actions">
          <button mat-raised-button color="primary" routerLink="/">
            <mat-icon>home</mat-icon>
            Back to Home
          </button>
          <button mat-stroked-button color="primary" (click)="goBack()">
            <mat-icon>arrow_back</mat-icon>
            Go Back
          </button>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .not-found-container {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: calc(100vh - 180px);
        padding: 40px 20px;
        background-color: #f8f9fa;
      }

      .content {
        background-color: white;
        border-radius: 8px;
        padding: 40px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        text-align: center;
        max-width: 500px;
        width: 100%;
      }

      .error-icon {
        font-size: 80px;
        height: 80px;
        width: 80px;
        color: #3498db;
        margin-bottom: 16px;
      }

      h1 {
        font-size: 72px;
        font-weight: 700;
        color: #3498db;
        margin: 0 0 16px;
        line-height: 1;
      }

      h2 {
        font-size: 24px;
        font-weight: 500;
        color: #333;
        margin: 0 0 16px;
      }

      p {
        font-size: 16px;
        color: #666;
        margin: 0 0 32px;
      }

      .actions {
        display: flex;
        gap: 16px;
        justify-content: center;
        flex-wrap: wrap;
      }

      button {
        min-width: 150px;
      }

      @media (max-width: 480px) {
        .content {
          padding: 30px 20px;
        }

        .error-icon {
          font-size: 60px;
          height: 60px;
          width: 60px;
        }

        h1 {
          font-size: 56px;
        }

        h2 {
          font-size: 20px;
        }

        .actions {
          flex-direction: column;
          gap: 12px;
        }

        button {
          width: 100%;
        }
      }
    `,
  ],
})
export class NotFoundComponent {
  goBack(): void {
    window.history.back();
  }
}
