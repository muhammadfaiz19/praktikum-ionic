import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonItem, IonLabel, IonInput, IonButton, IonBackButton, IonButtons } from '@ionic/angular/standalone';

@Component({
  selector: 'app-ganjil-genap',
  templateUrl: './ganjil-genap.page.html',
  styleUrls: ['./ganjil-genap.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonItem, IonLabel, IonInput, IonButton, IonButtons, IonBackButton]
})
export class GanjilGenapPage {
  angka: number | null = null;
  hasil: string = '';

  cek() {
    if (this.angka === null) {
      this.hasil = 'Masukkan angka terlebih dahulu!';
      return;
    }
    this.hasil = this.angka % 2 === 0 ? 'Genap' : 'Ganjil';
  }
}