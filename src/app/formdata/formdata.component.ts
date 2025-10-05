import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formdata',
  imports: [CommonModule, FormsModule],
  templateUrl: './formdata.component.html',
  styleUrl: './formdata.component.css'
})
export class FormdataComponent {
  name = 'Angular';
  favorite = 'Angular';
}
