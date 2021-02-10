import { Component, EventEmitter, Input, Output, ViewChild, ViewEncapsulation } from '@angular/core';

import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';


@Component({
    selector: 'ac-carrossel',
    templateUrl: './carrossel.component.html',
    styleUrls: ['./carrossel.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class CarrosselComponent{

    @Input() images: [];
    @Input() heightImg;
    @Input() widthImg;
    @Input() navigationIndicator:boolean = true;

    paused = false;
    unpauseOnArrow = false;
    pauseOnIndicator = false;
    pauseOnHover = true;

    @Output() indexCarrosel = new EventEmitter();
    cont:number=0;

    @ViewChild('carousel', {static : true}) carousel: NgbCarousel;

    togglePaused() {
      if (this.paused) {
        this.carousel.cycle();
      } else {
        this.carousel.pause();
      }
      this.paused = !this.paused;
    }

    onSlide(slideEvent: NgbSlideEvent) {
      if (this.unpauseOnArrow && slideEvent.paused &&
        (slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)) {
        this.togglePaused();
      }
      if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
        this.togglePaused();
      }

      if(this.cont>this.images.length-2){
        this.cont=0
      }else{
        this.cont++
      }
      this.indexCarrosel.emit(this.cont);
    }


}
