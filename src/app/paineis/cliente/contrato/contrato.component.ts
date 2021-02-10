import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { PerfectScrollbarConfigInterface,
    PerfectScrollbarComponent, PerfectScrollbarDirective } from 'ngx-perfect-scrollbar';
@Component({
    templateUrl: './contrato.component.html',
    styleUrls: ['./contrato.component.css']
})
export class ContratoComponent implements OnInit{
    @ViewChild('contrato') contrato: ElementRef
    public type: string = 'component';

    public disabled: boolean = false;

    public config: PerfectScrollbarConfigInterface = {};

    @ViewChild(PerfectScrollbarComponent) componentRef?: PerfectScrollbarComponent;
    @ViewChild(PerfectScrollbarDirective) directiveRef?: PerfectScrollbarDirective;

    textoContrato: string = `
         
         Lorem Ipsum é simplesmente uma simulação de texto da 
         indústria tipográfica e de impressos, e vem sendo utilizado 
         desde o século XVI, quando um impressor desconhecido pegou 
         uma bandeja de tipos e os embaralhou para fazer um livro de 
         modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, 
         como também ao salto para a editoração eletrônica, permanecendo 
         essencialmente inalterado. Se popularizou na década de 60, 
         quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, 
         e mais recentemente quando passou a ser integrado a softwares de editoração 
         eletrônica como Aldus PageMaker.\n

         É um fato conhecido de todos que um leitor se distrairá com o conteúdo de texto 
         legível de uma página quando estiver examinando sua diagramação. A vantagem de usar 
         Lorem Ipsum é que ele tem uma distribuição normal de letras, ao contrário de 
         "Conteúdo aqui, conteúdo aqui", fazendo com que ele tenha uma aparência similar a 
         de um texto legível. Muitos softwares de publicação e editores de páginas na internet 
         agora usam Lorem Ipsum como texto-modelo padrão, e uma rápida busca por 'lorem ipsum' 
         mostra vários websites ainda em sua fase de construção. Várias versões novas surgiram 
         ao longo dos anos, eventualmente por acidente, e às vezes de propósito (injetando humor, 
        e coisas do gênero).   
    `
    textos = [
        this.textoContrato, 
        this.textoContrato, 
        this.textoContrato, 
        this.textoContrato, 
        this.textoContrato,
        this.textoContrato,
        this.textoContrato,
        this.textoContrato
    ];

    constructor(private router: Router){}

    ngOnInit(): void {
        
    }

    voltar(){
        this.router.navigateByUrl("painel/cliente/meusdados");
    }

    gerarPdf(){

        let minhaTabela = this.contrato.nativeElement.textContent;

        let style = "<style>";
        style = style + "table {width: 100%;font: 20px Calibri;}";
        style = style + "table, th, td {border: solid 1px #DDD; border-collapse: collapse;";
        style = style + "padding: 2px 3px;text-align: center;}";
        style = style + "</style>";

        let win = window.open('', '', 'height=700,width=700');
        win.document.write('<html><head>');
        win.document.write('<title>CONTRATO ACADEMIA OLIMPO</title>');   // <title> CABEÇALHO DO PDF.
        win.document.write(style);                                     // INCLUI UM ESTILO NA TAB HEAD
        win.document.write('</head>');
        win.document.write('<body>');
        win.document.write(minhaTabela);                          // O CONTEUDO DA TABELA DENTRO DA TAG BODY
        win.document.write('</body></html>');
        win.document.close(); 	                                         // FECHA A JANELA
        win.print();
    }
}