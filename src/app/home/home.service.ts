import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class HomeService {
    homeResult = new Subject<any>();
    projetResult = new Subject<any>();
    compResult = new Subject<any>();
    constructor(private http: HttpClient){

    }

    fetchHomes(){
        this.http.get<any>('http://localhost:3000/api/v1/homes')
        .pipe(map(resultDataHome => {
            return resultDataHome.map(home => home);
        }))
        .subscribe(transformDataHome => {
            this.homeResult.next(transformDataHome);
        });
    }
    fetchProjets(){
        this.http.get<any>('http://localhost:3000/api/v1/projets')
        .pipe(map(resultDataProjet => {
            return resultDataProjet.map(projet => projet);
        }))
        .subscribe(transformDataProjet => {
            this.projetResult.next(transformDataProjet);
        });
    }
    fetchCompetences(){
        this.http.get<any>('http://localhost:3000/api/v1/competences')
        .pipe(map(resultDataComp => {
            return resultDataComp.map(comp => comp);
        }))
        .subscribe(transformDataComp => {
            this.compResult.next(transformDataComp);
        });
    }
}