import { Component,inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-apidatadetails',
  imports: [CommonModule],
  templateUrl: './apidatadetails.component.html',
  styleUrl: './apidatadetails.component.css'
})
export class ApidatadetailsComponent {

  http = inject(HttpClient);
  users: any[] = [];
  loading = false;
  error = '';

  load() {
    this.loading = true;
    this.error = '';
    this.http.get<any[]>('https://jsonplaceholder.typicode.com/comments')
      .subscribe({
        next: (data) => { this.users = data; this.loading = false; },
        error: () => { this.error = 'Failed to load users'; this.loading = false; }
      });
  }

}
