import { Component } from '@angular/core';
import { OnInit } from '@angular/core'; 
import { PokeDetail } from '../pokemon';
import { Input } from '@angular/core';
import { PokeShareInfo } from '../poke-share-info';
@Component({
  selector: 'app-pokedetail',
  standalone: false,
  templateUrl: './pokedetail.html',
  styleUrl: './pokedetail.css',
  providers: []
})
export class Pokedetail implements OnInit {

  @Input() detail: PokeDetail | undefined;


  constructor(private pokeShareInfo: PokeShareInfo) {
    this.pokeShareInfo.getObservable().subscribe(data => {
      console.log("Received in PokeDetail: " + data);
    });
  }

  ngOnInit(): void {}
}
