import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent{
   showMenu :Boolean =false;
  constructor(private renderer: Renderer2) {
    this.renderer.removeClass(document.body, 'bg-img');
   }
}
