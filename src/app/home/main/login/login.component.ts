import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AlertService } from 'src/app/shared/components/alert/alert.service';
import { AuthService } from '../../../core/auth/auth.service';
import { UserService } from '../../../core/user/user.service';
@Component({
    selector: 'ac-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    loginGroup: FormGroup;
    constructor
        (
            private authService: AuthService,
            private formBuilder: FormBuilder,
            private router: Router,
            private userService: UserService,
            private alertService: AlertService
        ) { }

    ngOnInit(): void {
        this.loginGroup = this.formBuilder.group({
            senha: ['', Validators.required],
            email: ['', Validators.required]
        })
    }

    login() {
        let user;
        let email = this.loginGroup.get('email').value;
        let senha = this.loginGroup.get('senha').value;

        if (this.loginGroup.valid && !this.loginGroup.pending) {
            this.authService.authenticate(email, senha).subscribe(resp => {

                this.userService.setToken(resp.value.token);

                resp.value.claims.forEach(x => user = x.value);

                this.redirectPainel(user);

            },
                error => {
                        this.alertService.danger(error.error);
                }
            );
        }
    }

    private redirectPainel(user: string) {
        switch (user) {
            case "Cliente":
                this.router.navigate(['painel/cliente'])
                break;
            case "Recepcionista":
                this.router.navigate(['painel/recepcionista']);
                break;
            case "Instrutor":
                this.router.navigate(['painel/instrutor']);
                break;
            case "Gerente":
                this.router.navigate(['painel/gerente']);
                break;
            case "Supervisor":
                this.router.navigate(['painel/gerente']);
                break;
            default:
                break;
        }
    }
}