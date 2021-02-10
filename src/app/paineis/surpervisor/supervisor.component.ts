import {Component} from "@angular/core";
import { Router } from '@angular/router';

import { UserService } from 'src/app/core/user/user.service';
@Component({selector:'ac-supervisor', 
templateUrl:'./supervisor.component.html', 
styleUrls:['./supervisor.component.css'
]
}
)
export class SupervisorComponent{

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
        this.router.navigateByUrl("painel/supervisor");
    }
    
}