import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { UserService } from '../../../core/user/user.service';

@Directive({
    selector: '[hideIfLogged]'
})
export class HideIfloggedDirective implements OnInit{
    
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
            if(user){
                this.render.setStyle(this.elementRef.nativeElement, 'display', 'none');
            }else{
                this.render.setStyle(this.elementRef.nativeElement, 'display', 'block');
            }
        })
    }
}
