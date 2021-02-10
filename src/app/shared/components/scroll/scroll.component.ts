import { Component, ViewChild } from '@angular/core';
import { PerfectScrollbarConfigInterface,
    PerfectScrollbarComponent, PerfectScrollbarDirective } from 'ngx-perfect-scrollbar';
@Component({
    selector: 'ac-scroll',
    templateUrl: './scroll.component.html',
    styleUrls: ['./scroll.component.css']
})
export class ScrollComponent{
    public type: string = 'component';

    public disabled: boolean = false;

    public config: PerfectScrollbarConfigInterface = {};

    @ViewChild(PerfectScrollbarComponent) componentRef?: PerfectScrollbarComponent;
    @ViewChild(PerfectScrollbarDirective) directiveRef?: PerfectScrollbarDirective;   

    public toggleType(): void {
        this.type = (this.type === 'component') ? 'directive' : 'component';
      }
    
      public toggleDisabled(): void {
        this.disabled = !this.disabled;
      }
    
      public scrollToXY(x: number, y: number): void {
        if (this.type === 'directive' && this.directiveRef) {
          this.directiveRef.scrollTo(x, y, 500);
        } else if (this.type === 'component' && this.componentRef && this.componentRef.directiveRef) {
          this.componentRef.directiveRef.scrollTo(x, y, 500);
        }
      }
    
      public scrollToTop(): void {
        if (this.type === 'directive' && this.directiveRef) {
          this.directiveRef.scrollToTop();
        } else if (this.type === 'component' && this.componentRef && this.componentRef.directiveRef) {
          this.componentRef.directiveRef.scrollToTop();
        }
      }
    
      public scrollToLeft(): void {
        if (this.type === 'directive' && this.directiveRef) {
          this.directiveRef.scrollToLeft();
        } else if (this.type === 'component' && this.componentRef && this.componentRef.directiveRef) {
          this.componentRef.directiveRef.scrollToLeft();
        }
      }
    
      public scrollToRight(): void {
        if (this.type === 'directive' && this.directiveRef) {
          this.directiveRef.scrollToRight();
        } else if (this.type === 'component' && this.componentRef && this.componentRef.directiveRef) {
          this.componentRef.directiveRef.scrollToRight();
        }
      }
    
      public scrollToBottom(): void {
        if (this.type === 'directive' && this.directiveRef) {
          this.directiveRef.scrollToBottom();
        } else if (this.type === 'component' && this.componentRef && this.componentRef.directiveRef) {
          this.componentRef.directiveRef.scrollToBottom();
        }
      }
    
      public onScrollEvent(event: any): void {
        console.log(event);
      }
}