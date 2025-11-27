import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonBackButton, IonButtons } from '@ionic/angular/standalone';

@Component({
  selector: 'app-prima',
  templateUrl: './prima.page.html',
  styleUrls: ['./prima.page.scss'],
  standalone: true,
  imports: [CommonModule, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonButtons, IonBackButton]
})
export class PrimaPage implements OnInit {
  primaList: number[] = [];

  ngOnInit() {
    this.cariPrima();
  }

  isPrima(n: number): boolean {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return false;
    }
    return true;
  }

  cariPrima() {
    for (let i = 2; i <= 49; i++) {
      if (this.isPrima(i)) {
        this.primaList.push(i);
      }
    }
  }
}