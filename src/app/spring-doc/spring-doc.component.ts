import {AfterViewInit, Component} from '@angular/core';

declare global {
  interface Window {
    googleTranslateElementInit: () => void;
  }
}

declare var google: any;
@Component({
  selector: 'app-spring-doc',
  standalone: true,
  imports: [],
  templateUrl: './spring-doc.component.html',
  styleUrl: './spring-doc.component.css'
})
export class SpringDocComponent implements AfterViewInit {

  constructor() {}

  ngAfterViewInit() {
    this.loadGoogleTranslate();
  }

  loadGoogleTranslate() {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    document.head.appendChild(script);
    (window as any).googleTranslateElementInit = this.googleTranslateElementInit;
  }

  googleTranslateElementInit() {
    new (window as any).google.translate.TranslateElement({
      pageLanguage: 'en',
      includedLanguages: 'ru,es,de,fr',
      layout: (window as any).google.translate.TranslateElement.InlineLayout.SIMPLE
    }, 'google_translate_element');
  }

}
