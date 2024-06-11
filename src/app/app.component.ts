import { Component, OnInit } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";
import {NgOptimizedImage} from "@angular/common";
import {SpringDocComponent} from "./spring-doc/spring-doc.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, RouterLinkActive, RouterLink, NgOptimizedImage, SpringDocComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'DocDev';
  selectedTech: string | null = null;

  selectTech(tech: string) {
    console.log('Tech selected:', tech);
    this.selectedTech = tech;
  }

  goBack() {
    console.log('Going back');
    this.selectedTech = null;
  }
}

