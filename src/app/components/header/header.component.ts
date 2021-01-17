import { Component, OnInit } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';

import { UserService } from 'src/app/services/user.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    public userRole : string;

    constructor(private readonly oauthService: OAuthService,
        private userService: UserService) { }    

    ngOnInit(): void {        
        this.userService.getSelf().subscribe(user => {
            this.userRole = user.role.name;            
        });        
    }

    logout() {
        sessionStorage.clear();
        localStorage.clear();
        this.oauthService.logOut();
    }
}
