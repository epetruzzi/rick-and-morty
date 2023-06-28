import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.page.html',
  styleUrls: ['./character-detail.page.scss'],
})
export class CharacterDetailPage implements OnInit {

  characterId: string = "";

  constructor(
    private actRoute: ActivatedRoute
  ) { 
    this.characterId = this.actRoute.snapshot.paramMap.get('id') as string
    console.log ()

  }

  ngOnInit() {
  }

}
