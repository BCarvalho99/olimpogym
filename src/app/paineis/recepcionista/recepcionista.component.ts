import {Component} from "@angular/core";
import { Router } from '@angular/router';

import { UserService } from 'src/app/core/user/user.service';
@Component({selector:'ac-recepcionista', 
templateUrl:'./recepcionista.component.html', 
styleUrls:['./recepcionista.component.css'
]
}
)
export class RecepcionistaComponent{
    constructor
    (
        private userService: UserService,
        private router: Router,
    ){}
    
    logout(){
        this.userService.logout();
        
        this.router.navigate(['home']);
    }

    inicio(){
        this.router.navigateByUrl("painel/recepcionista");
    }
}