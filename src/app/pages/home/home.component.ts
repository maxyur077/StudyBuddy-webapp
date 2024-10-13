import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  closeNav() {
    document.getElementById('sideNav')!.style.width = '0';
  }
  openNav() {
    document.getElementById('sideNav')!.style.width = '250px';
  }
}
