import {Directive, ElementRef, HostListener, OnInit, Renderer2} from '@angular/core';

@Directive({
    selector: '[tableButton]'
})
export class TableButton implements OnInit{

    currentDisplay: string;
    constructor
    (
        private elementRef: ElementRef<any>,
        private render: Renderer2
    ){}

    ngOnInit(): void {
             this.buttonStyle();
    }

    buttonStyle(){
        this.currentDisplay = getComputedStyle(this.elementRef.nativeElement).display;
        this.render.setStyle(this.elementRef.nativeElement, 'height', '36px')
        this.render.setStyle(this.elementRef.nativeElement, 'width', '160px')
        this.render.setStyle(this.elementRef.nativeElement, 'border-radius', '8px')
        this.render.setStyle(this.elementRef.nativeElement, 'color', 'white')
        this.render.setStyle(this.elementRef.nativeElement, 'background', 'rgb(5,67,89)')
        this.render.setStyle(this.elementRef.nativeElement, 'background', 'linear-gradient(90deg, rgba(5,67,89,1) 0%, rgba(7,96,122,1) 50%, rgba(5,67,89,1) 100%)')
        this.render.setStyle(this.elementRef.nativeElement, 'border', 'none');
        this.render.setStyle(this.elementRef.nativeElement, 'margin', '0% 3%');

    }

    @HostListener('mouseover')
    buttonHoverOn(){
        this.render.setStyle(this.elementRef.nativeElement, 'background', 'rgb(7,96,122)')
        this.render.setStyle(this.elementRef.nativeElement, 'background', 'linear-gradient(90deg, rgba(7,96,122,1) 0%, rgba(5,67,89,1) 50%, rgba(7,96,122,1) 100%)')
    }
    @HostListener('mouseleave')
    buttonHoverOff(){
        this.buttonStyle();
    }
}