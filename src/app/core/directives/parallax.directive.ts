import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appParallax]'
})
export class ParallaxDirective {

  @Input('transform-start') start: number = 0
  @Input('transform-end') end: number = 0
  @Input('height') height: number = 0
  initialTop: number = 0

  constructor(private eleRef: ElementRef) {
    this.initialTop = this.eleRef.nativeElement.getBoundingClientRect().top
    if (this.height == 0)
      this.height = window.innerHeight / 2;
  }

  @HostListener("window:scroll", ["$event"])
  onWindowScroll(event) {
    if (this.initialTop == 0)
      this.initialTop = this.eleRef.nativeElement.getBoundingClientRect().top + window.scrollY


    let currentScroll = window.scrollY + window.innerHeight;

    if (currentScroll > this.initialTop) {
      console.log("reach element");

      let cp = currentScroll - this.initialTop
      if (cp < this.height) {
        console.log("in element area");
        let t = cp / this.height * (this.end - this.start) + this.start;

        this.eleRef.nativeElement.setAttribute('style', 'transform: translate(0, ' + t + 'px);');
      }
      else {
        console.log("after element");
        this.eleRef.nativeElement.setAttribute('style', 'transform: translate(0, ' + this.end + 'px);');
      }

    }
    else {
      console.log("before element");
      this.eleRef.nativeElement.setAttribute('style', 'transform: translate(0, ' + this.start + 'px);');
    }

  }

}
