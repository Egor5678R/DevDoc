import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-java-doc',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './java-doc.component.html',
  styleUrl: './java-doc.component.css'
})
export class JavaDocComponent {

}
