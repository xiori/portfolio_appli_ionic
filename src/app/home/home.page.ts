import { HomeService } from './home.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  homeList: string[];
  projetList: string[];
  compList: string[];



  private homeListeSubscription: Subscription;
  private projetListSubscription: Subscription;
  private compListSubscription: Subscription;

  constructor(private homeService: HomeService){

  }

  ngOnInit(){
    this.homeListeSubscription = this.homeService.homeResult.subscribe(homes => {
      this.homeList = homes;
    });
    this.projetListSubscription = this.homeService.projetResult.subscribe(projets => {
      this.projetList = projets;
    });
    this.compListSubscription = this.homeService.compResult.subscribe(competences => {
      this.compList = competences;
    });


    this.homeService.fetchHomes();
    this.homeService.fetchProjets();
    this.homeService.fetchCompetences();
  }

}
