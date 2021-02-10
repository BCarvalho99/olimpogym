import {Component} from "@angular/core";
import { Router } from '@angular/router';

import { UserService } from 'src/app/core/user/user.service';
@Component({selector:'ac-instrutor', 
templateUrl:'./instrutor.component.html', 
styleUrls:['./instrutor.component.css'
]
}
)
export class InstrutorComponent{

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
        this.router.navigateByUrl("painel/instrutor");
    }
}