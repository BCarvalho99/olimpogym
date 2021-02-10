import { Component, OnInit } from '@angular/core';



@Component({
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

    images =
        [
            "../../../assets/img/Index/img-car01.jpeg",
            "../../../assets/img/Index/img-car02.jpeg",
            "../../../assets/img/Index/img-car03.jpeg",
            "../../../assets/img/Index/img-car04.jpeg"
    ];

    heigth = 350;
    width = 800;

    ngOnInit(): void {

    }
}
