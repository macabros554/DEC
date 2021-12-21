import { Component } from '@angular/core';
import { CardData } from './interfaces/card-data';
import { MatDialog } from '@angular/material/dialog';
import { RestartDialogComponent } from './components/restart-dialog/restart-dialog.component';
import { CartasPokemonInterface } from './interfaces/cartas-pokemon-interface';
import { HttpClientModule,HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-card-game-pokemon2';

  /*cardImages = [
    'pDGNBK9A0sk',
    'fYDrhbVlV1E',
    'qoXgaF27zBc',
    'b9drVB7xIOI',
    'TQ-q5WAVHj0'
  ];

  cardImages = [
    'https://images.pokemontcg.io/det1/1.png',//bulbasaur
    'https://images.pokemontcg.io/det1/4.png',//charmander
    'https://images.pokemontcg.io/pop3/3.png',//Jolteon
    'https://images.pokemontcg.io/pop3/2.png',//Flareon
    'https://images.pokemontcg.io/ex11/4.png' //Espeon
  ];*/

  cardImages!:string[];

  rellenarCartas(){
    this.http.get<CartasPokemonInterface>('https://api.pokemontcg.io/v2/cards/').subscribe((resp) => {
      console.log(resp.data[2].images.small);

      for (let i = 0; i < 5; i++) {
        this.cardImages.push(resp.data[i].images.small)

      }

      //this.resultado = resp;
    })
  }

  cards: CardData[] = [];

  flippedCards: CardData[] = [];

  matchedCount = 0;

  shuffleArray(anArray: any[]): any[] {
    return anArray.map(a => [Math.random(), a])
      .sort((a, b) => a[0] - b[0])
      .map(a => a[1]);
  }

  constructor(private dialog: MatDialog,private http:HttpClient) {

  }

  ngOnInit(): void {
    this.setupCards();
    this.rellenarCartas();
  }

  setupCards(): void {
    this.cards = [];
    this.cardImages.forEach((image) => {
      const cardData: CardData = {
        imageId: image,
        state: 'default'
      };

      this.cards.push({ ...cardData });
      this.cards.push({ ...cardData });

    });

    this.cards = this.shuffleArray(this.cards);
  }

  cardClicked(index: number): void {
    const cardInfo = this.cards[index];

    if (cardInfo.state === 'default' && this.flippedCards.length < 2) {
      cardInfo.state = 'flipped';
      this.flippedCards.push(cardInfo);

      if (this.flippedCards.length > 1) {
        this.checkForCardMatch();
      }

    } else if (cardInfo.state === 'flipped') {
      cardInfo.state = 'default';
      this.flippedCards.pop();

    }
  }

  checkForCardMatch(): void {
    setTimeout(() => {
      const cardOne = this.flippedCards[0];
      const cardTwo = this.flippedCards[1];
      const nextState = cardOne.imageId === cardTwo.imageId ? 'matched' : 'default';
      cardOne.state = cardTwo.state = nextState;

      this.flippedCards = [];

      if (nextState === 'matched') {
        this.matchedCount++;

        if (this.matchedCount === this.cardImages.length) {
          const dialogRef = this.dialog.open(RestartDialogComponent, {
            disableClose: true
          });

          dialogRef.afterClosed().subscribe(() => {
            this.restart();
          });
        }
      }

    }, 1000);
  }

  restart(): void {
    this.matchedCount = 0;
    this.setupCards();
  }


}
