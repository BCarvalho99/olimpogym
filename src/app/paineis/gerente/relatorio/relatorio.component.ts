import { Component, OnInit } from "@angular/core";
import { ClienteService } from '../../../shared/services/cliente.service';
import * as d3 from 'd3';
import { Value } from 'src/app/shared/model/cliente/obterClienteDto';
import { Relatorio } from './relatorio';

@Component({
    templateUrl: './relatorio.component.html',
    styleUrls: ["./relatorio.component.css"]
})
export class RelatorioComponent implements OnInit {

    private svg;
    private margin = 60;
    private width = 700 - (this.margin * 2);
    private height = 400 - (this.margin * 2);
    private obterClienteDto: Value[];

    countPlano: number;
    pagination = { perpage: 1000, page: 1 };

    constructor
        (
            private clienteService: ClienteService
        ) { }

    ngOnInit(): void {
        this.clienteService
            .get('', this.pagination)
            .subscribe(clientes => this.obterClienteDto = clientes.data)
            
        d3.csv("../../../../assets/planos.csv")
            .then(() => this.dadosPlanos(this.obterClienteDto));

        setTimeout(() => {
            this.createSvg();
            this.drawBars(this.dadosPlanos(this.obterClienteDto));
        }, 1500)
    }

    private dadosPlanos(clientes: Value[]): Relatorio[] {
        let euro = new Relatorio();
        euro.nome = "Plano Euro"
        euro.quantidade = 0;

        let atlas = new Relatorio();
        atlas.nome = "Plano Atlas"
        atlas.quantidade = 0;

        let hercules = new Relatorio();
        hercules.nome = "Plano Hercules";
        hercules.quantidade = 0;

        let planos = new Array<Relatorio>();

        clientes.forEach(cliente => {
            switch (cliente.plano.nome) {
                case euro.nome:
                    euro.quantidade++;
                    break;
                case atlas.nome:
                    atlas.quantidade++;
                    break;
                case hercules.nome:
                    hercules.quantidade++;
            }
        })

        planos.push(euro, atlas, hercules);

        return planos;
    }

    private createSvg(): void {
        this.svg = d3.select("figure#bar")
            .append("svg")
            .attr("width", this.width + (this.margin * 2))
            .attr("height", this.height + (this.margin * 2))
            .append("g")
            .attr("transform", "translate(" + this.margin + "," + this.margin + ")");
    }

    private drawBars(data: Relatorio[]) {
        const x = d3.scaleBand()
            .range([0, this.width])
            .domain(data.map(d => d.nome))
            .padding(0.2);

        this.svg.append("g")
            .attr("transform", "translate(0," + this.height + ")")
            .call(d3.axisBottom(x))
            .selectAll("text")
            .attr("transform", "translate(-10,0)rotate(-45)")
            .style("text-anchor", "end");

        const y = d3.scaleLinear()
            .domain([0, this.obterClienteDto.length])
            .range([this.height, 0]);

        // Draw the Y-axis on the DOM
        this.svg.append("g")
            .call(d3.axisLeft(y));

        // Create and fill the bars
        this.svg.selectAll("bars")
            .data(data)
            .enter()
            .append("rect")
            .attr("x", d => x(d.nome))
            .attr("y", d => y(d.quantidade))
            .attr("width", x.bandwidth())
            .attr("height", (d) => this.height - y(d.quantidade))
            .attr("fill", "black");
    }
}
