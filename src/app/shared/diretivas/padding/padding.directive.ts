import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { UserService } from '../../../core/user/user.service';

@Directive({
    selector: '[paddingDirective]'
})
export class PaddingDirective implements OnInit{
    
    currentDisplay: string;
    constructor
    (
        private elementRef: ElementRef<any>,
        private render: Renderer2,
        private userService: UserService
    ){}

    ngOnInit(): void {
        this.currentDisplay = getComputedStyle(this.elementRef.nativeElement).display;

        this.userService.getUser().subscribe(user => {
            console.log("valor user: " + user)
            if(user){
                this.currentDisplay = getComputedStyle(this.elementRef.nativeElement).display;
                this.render.setStyle(this.elementRef.nativeElement, 'padding', '600px');
            }else{
                this.currentDisplay = getComputedStyle(this.elementRef.nativeElement).display;
                this.render.setStyle(this.elementRef.nativeElement, 'padding', '100px');
            }
        })
    }
}