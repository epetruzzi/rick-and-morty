import { Component, OnInit } from '@angular/core';
import { RymserviceService } from '../../services/rymservice.service';
//import {ShareModule} from 'src/app/share/share.module'

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],

})

export class HomePage implements OnInit {

  characters: any[] = [];
  params = {} as any;

  constructor(
    private RymserviceSvc: RymserviceService,
  ) { }

  ngOnInit() {

    this.params.page = 0;
    this.getCharacters()

  }

  getCharacters(event?: any) {
this.params.page += 1;

this.RymserviceSvc.getCharacters(this.params).subscribe({

  next: (res: any) => {

    this.characters.push(...res.results)
    console.log(this.characters);

    if(event) event.target.complete();

  },

  error: () => {
    if(event) event.target.complete();
  }

})
  }

}
