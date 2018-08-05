import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent {

  constructor(private renderer: Renderer2) {
    this.renderer.removeClass(document.body, 'bg-img');
   }
}
