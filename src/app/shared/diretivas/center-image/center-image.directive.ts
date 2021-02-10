import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { UserService } from '../../../core/user/user.service';

@Directive({
    selector: '[centerImage]'
})
export class CenterImageDirective implements OnInit{
    
    constructor
    (
        private elementRef: ElementRef<any>,
        private render: Renderer2,
        private userService: UserService
    ){}

    ngOnInit(): void {
        this.userService.getUser().subscribe(user => {
            if(user){
                this.render.setStyle(this.elementRef.nativeElement, 'margin-left', '45%');
            }else{
                this.render.setStyle(this.elementRef.nativeElement, 'margin-left', '0');
            }
        })
    }
}