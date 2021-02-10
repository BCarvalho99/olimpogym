import { ClienteService } from './../../../shared/services/cliente.service';
import { SearchService } from './../../../shared/components/search/search.service';
import { UserService } from './../../../core/user/user.service';
import { AlertService } from './../../../shared/components/alert/alert.service';
import { Treino } from './../../../shared/model/cliente-treino/cliente-treino';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TreinoService } from './../../../shared/services/treino.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Pagination } from './../../../shared/model/Pagination/pagination';
import { Value } from './../../../shared/model/cliente/obterClienteDto';
import { ActivatedRoute } from '@angular/router';
import { Component, ElementRef, OnInit } from "@angular/core";
import { ClienteTreinoService } from 'src/app/shared/services/cliente-treino.service';
@Component({
  selector: 'ac-cliente-instrutor',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css'
  ]
}
)
export class ClienteComponent implements OnInit {
  contentModal: ElementRef;
  contentVisuModal: ElementRef;
  treinoGroup: FormGroup;
  clientes: Pagination<Value>;
  clienteId = 0;
  treinos: Treino;

  constructor(
    private active: ActivatedRoute,
    private modalService: NgbModal,
    private treinoService: TreinoService,
    private formBuilder: FormBuilder,
    private alertService: AlertService,
    private userService: UserService,
    private clienteTreinoService: ClienteTreinoService,
    private searchService: SearchService,
    private clienteService: ClienteService,

  ) { }

  ngOnInit(): void {
    this.clientes = this.active.snapshot.data['obterClienteDto'];
    this.treinoGroup = this.formBuilder.group({
      descricao: ['', Validators.required],
      nome: ['', Validators.required],
      funcionarioId: [0],
      clienteId: [0],
    });

    this.clienteTreinoService.get(1).subscribe(treinos => {
      this.treinos = treinos.data[0];
    });

      }
  openModal(clienteId: number) {
    this.modalService.open(this.contentModal),
      this.clienteId = clienteId;
  }
  openModalVisu(clienteId: number) {
    this.clienteId = clienteId;

    this.clienteTreinoService.get(clienteId).subscribe(treinos => {

      this.treinos = treinos.data[0],
      console.log(this.treinos);
    });
    this.modalService.open(this.contentVisuModal);
}


  closeModal() {
    this.modalService.dismissAll();
  }

  salvarTreino() {
    let treino = this.treinoGroup.getRawValue();
    this.userService.getUser().subscribe(user => {
      treino.funcionarioId = Number.parseInt(user.UsuarioId)
    });

    treino.clienteId = this.clienteId;

    this.treinoService.post(treino).subscribe(() => {
      this.alertService.success('Treino registrado com sucesso.');
      this.treinoGroup.reset();
    },
      error => {
        this.alertService.danger('Ocorreu um erro, treino não registrado.')
      })
  }

  getCliente(search: string, page: any = null) {
    // if(search.length != 0 page != null){
    this.searchService.setLoadingTrue()
    this.clienteService
        .get(search, page)
        .subscribe(clienteTreinos => {
            this.clientes = clienteTreinos,
                setTimeout(() => {
                    this.searchService.setLoadingFalse()
                }, 250)
        });
    //}
}



}
