import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-prizes',
  templateUrl: './prizes.component.html',
  styleUrls: ['./prizes.component.scss']
})
export class PrizesComponent implements AfterViewInit {
  ngAfterViewInit() {
    const boxes = document.querySelectorAll('.colored-box');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, { threshold: 1 });

    boxes.forEach(box => observer.observe(box));
  }
}
