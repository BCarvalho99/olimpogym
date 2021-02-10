import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
    selector: 'ac-painel-modal',
    templateUrl: './painel-modal.component.html'
})
export class PainelModalComponent implements OnInit {

    @Output() content: any = new EventEmitter<any>();
    @ViewChild('content') longContent: ElementRef;

    ngOnInit(): void {
        setTimeout(() => {
            this.content.emit(this.longContent);
        }, 10)
    }
}