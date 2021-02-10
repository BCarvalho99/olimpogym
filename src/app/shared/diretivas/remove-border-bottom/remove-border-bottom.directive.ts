import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { UserService } from '../../../core/user/user.service';

@Directive({
    selector: '[removeborderbottom]'
})
export class RemoveBorderBottomDirective implements OnInit {

    navigation: NavigationStart;
    constructor
        (
            private elementRef: ElementRef<any>,
            private render: Renderer2,
            private router: Router,
        ) { }

    ngOnInit(): void {
        this.router.events.subscribe((navigation:any) => {
            console.log(navigation);
            if(navigation.url == "/home"){
                this.render.setStyle(this.elementRef.nativeElement, 'border-bottom', '2px solid aqua');
            }

        });
    }
}