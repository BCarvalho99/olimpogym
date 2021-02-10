import { Component, ElementRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'ac-remove-cliente',
    templateUrl: 'remove-cliente.component.html',
    styleUrls: ['remove-cliente.component.css']
})
export class RemoveClienteComponent{
    contentModal: ElementRef;
    constructor(private modalService: NgbModal){}

    close(){
        this.modalService.dismissAll();
    }

    openModal(){
        this.modalService.open(this.contentModal, { size: 'lg' });
    }

}