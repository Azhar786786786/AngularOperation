import { Component,inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { provideHttpClient, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-apidata',
  imports: [CommonModule],
  templateUrl: './apidata.component.html',
  styleUrl: './apidata.component.css'
})
export class ApidataComponent {

  http = inject(HttpClient);
  users: any[] = [];
  loading = false;
  error = '';

  load() {
    this.loading = true;
    this.error = '';
    this.http.get<any[]>('https://jsonplaceholder.typicode.com/users')
      .subscribe({
        next: (data) => { this.users = data; this.loading = false; },
        error: () => { this.error = 'Failed to load users'; this.loading = false; }
      });
  }

}
