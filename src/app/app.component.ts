import { Component, ElementRef, Renderer2, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  showMenu : Boolean = false;

  constructor(private el : ElementRef, private renderer:Renderer2){

  }
 
}
