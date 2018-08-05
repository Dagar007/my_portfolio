import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  constructor(private renderer: Renderer2) {
    this.renderer.removeClass(document.body, 'bg-img');
   }
}
