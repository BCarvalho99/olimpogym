import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { EmailService } from '../../shared/services/email.service';
@Component({
    selector: 'ac-footer',
    templateUrl: 'footer.component.html',
    styleUrls: ['footer.component.css']
})
export class FooterComponent implements OnInit{
    emailGroup: FormGroup;

    constructor
    (
        private emailService: EmailService,
        private formBuilder: FormBuilder
    ){}
    ngOnInit(): void {
        this.emailGroup = this.formBuilder.group({
            emailTo: [''],
            body: [''],
            subject:[''],
            isHtml: [true]
        })
    }

    enviarEmail(){
        let email = this.emailGroup.getRawValue();
        email.body = `<section>
        <h3 style="text-align: center;font-size: 14pt ;color: white;background-color: black;padding: 20px ; margin-bottom: 0;">Seja bem vindo ao sistema Olimpo</h3>
        <article style="text-align: center;background-color: yellow; margin-top: 0; padding: 20px; font-size: 13pt;">
            E com imenso prazer que recebemos o seu interesse em conhecer sobre nossas promoções. <br>
            O nosso objetivo é fornecer serviços de qualidade para atender a sua necessidade, com isso 
            contamos com  excelentes profissionais capacidades e com ótima infraestrutura.
        </article>
    </section>`;
        email.subject = "Promoções Olimpo";
        email.isHtml = true;

        this.emailService
            .post(email)
            .subscribe(() =>{
                this.emailGroup.reset();
            })
    }

}