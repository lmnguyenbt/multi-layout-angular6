import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/_services/api.service';

@Injectable()
export class DashboardService {
    public token: string;

    constructor( private ApiService: ApiService ) {
    }

}
