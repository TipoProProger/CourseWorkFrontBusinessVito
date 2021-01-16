import { Injectable } from '@angular/core';
import { AuthConfig, NullValidationHandler, OAuthService } from 'angular-oauth2-oidc';
import { filter } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class AuthConfigService {

    private _decodedAccessToken: any;
    private _decodedIDToken: any;
    get decodedAccessToken() { return this._decodedAccessToken; }
    get decodedIDToken() { return this._decodedIDToken; }

    constructor(
        private readonly oauthService: OAuthService,
        private readonly authConfig: AuthConfig
    ) { }

    async initAuth(): Promise<void> {
        return new Promise((resolve, reject) => {
            // setup oauthService
            this.oauthService.configure(this.authConfig);
            this.oauthService.setStorage(localStorage);
            this.oauthService.tokenValidationHandler = new NullValidationHandler();

            // subscribe to token events
            this.oauthService.events
                .pipe(filter((e: any) => {
                    return e.type === 'token_received';
                }))
                .subscribe(() => this.handleNewToken());

            // continue initializing app or redirect to login-page        
            this.oauthService.loadDiscoveryDocumentAndLogin().then(isLoggedIn => {
                if (isLoggedIn) {
                    this.oauthService.setupAutomaticSilentRefresh();
                    resolve();
                } else {
                    this.oauthService.initImplicitFlow();
                    reject();
                }
            });

        });
    }

    private handleNewToken() {
        
        this._decodedAccessToken = this.oauthService.getAccessToken();
        this._decodedIDToken = this.oauthService.getIdToken();

        console.log(this._decodedAccessToken);
        console.log(this._decodedIDToken);

        sessionStorage.setItem("decodedToken", JSON.stringify(this._decodedAccessToken));
    }

}