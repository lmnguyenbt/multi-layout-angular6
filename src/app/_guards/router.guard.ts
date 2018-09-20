import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { ActivatedRouteSnapshot } from "@angular/router";
import { RouterStateSnapshot } from "@angular/router";

// Jwt service
import { JwtService } from 'src/app/_services/jwt.service';

// Menu const
//import { MENUGUARD } from "../../pages/layout/menu/menu-guard.const";

@Injectable()
export class RouterGuard implements CanActivate {
    menuGuards: any[] = [];
    menuActivate: any[] = [];

    constructor(
        private router: Router,
        private jwtService: JwtService) {
        // Get define menu guard and get menu activate
        //this.menuGuards = MENUGUARD;
        //this.menuActivate = this.jwtService.getMenuActivate();
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        /*const url = state.url;
        const arrURL = url.split('/', 3);

        let concatURL = arrURL[0] + '/' + arrURL[1];

        if(arrURL[2]) {
            concatURL += '/' + arrURL[2];
        }

        const findMenuGuard = this.menuGuards.find((item) => {
            return item.link === concatURL;
        });

        if(findMenuGuard) {
            const findMenuActivate = this.menuActivate.find((item) => {
                return item === findMenuGuard.alias;
            });

            if(findMenuActivate) {
                return true;
            }
        }

        this.router.navigate(['/access-denied']);*/
        return false;
    }
}
