import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-modal-options',
  templateUrl: './modal-config.html',
  encapsulation: ViewEncapsulation.None,
  styles: [`
    .dark-modal .modal-content {
      background-color: #292b2c;
      color: white;
    }
    .dark-modal .close {
      color: white;
    }
    .light-blue-backdrop {
      background-color: #5cb3fd;
    }
    .bg-verde{
      background-color: #00927B;
    }
    .btn-aulasandamento{
    color: #ffffff;
    border: 1px solid aqua;
    background-color: #034051;
  }
  `]
})
export class NgbdModalOptions implements OnInit {
  closeResult: string;
  @Input() showLink: number = 0;
  @Input() textButton: string = "Modal";
  @Input() modalTitle: string;
  @Input() buttonModal: string;
  @Input() btnClass: string;
  @Input() bgClassBody: string;
  @Input() btnModal: string;
  @Output() indiceN: any = new EventEmitter<any>();
  @Output() content: any = new EventEmitter<any>();
  @ViewChild('longContent') longContent: ElementRef;

  constructor
    (
      private modalService: NgbModal
    ) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.content.emit(this.longContent);
    }, 10)
  }

  getNextItem() {

    let item = 1;

    this.indiceN.emit(item)

  }

  openBackDropCustomClass(content) {
    this.modalService.open(content, { backdropClass: 'light-blue-backdrop' });
  }

  openWindowCustomClass(content) {
    this.modalService.open(content, { windowClass: 'dark-modal' });
  }

  openSm(content) {
    this.modalService.open(content, { size: 'sm' });
  }

  openLg(content) {
    this.modalService.open(content, { size: 'lg' });
  }

  openXl(content) {
    this.modalService.open(content, { size: 'xl' });
  }

  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
  }

  openScrollableContent(longContent) {
    this.modalService.open(longContent, { scrollable: true });
  }
}
