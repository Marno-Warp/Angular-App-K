import { Component, AfterViewInit, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements AfterViewInit {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit() {
    const elements = this.el.nativeElement.querySelectorAll(
      '.tiger-image, .cash-prize-play-slogan, .money-bill'
    );

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement;
          this.renderer.addClass(target, 'on-screen');
          observer.unobserve(target); 
        }
      });
    }, { threshold: 0.5 }); 

    elements.forEach((element: HTMLElement) => observer.observe(element));
  }
}
