import { PlanoService } from './../../../../shared/services/plano.service';
import { ObterPlanoDto } from './../../../../shared/model/plano/ObterPlanoDto';
import {
  Component, Input, OnInit
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pagination } from 'src/app/shared/model/Pagination/pagination';
@Component({
  selector: 'ac-card',
  templateUrl: './card.component.html',
  styleUrls: [
    './card.component.css'
  ]
})
export class CardComponent implements OnInit {

  @Input() img: string;
  paginationObterPlanoDto: Pagination<ObterPlanoDto>;

  planTitle = ["PLANO HERCULES", "PLANO EURO", "PLANO ATLAS"];

  @Input() index: number;
  constructor
    (
      private activatedRoute: ActivatedRoute
    ) {}

  ngOnInit(): void {
    this.paginationObterPlanoDto = this.activatedRoute.snapshot.data["obterPlanoDto"];
    
  }

}


