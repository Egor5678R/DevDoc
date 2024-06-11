import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent  implements OnInit {
  ngOnInit() {
    document.getElementById('theme-toggle')!.addEventListener('click', () => {
      document.body.classList.toggle('dark-theme');
    });
  }
}
