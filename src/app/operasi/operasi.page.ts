import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonItem, IonLabel, IonInput, IonButton, IonButtons, IonBackButton } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-operasi',
  templateUrl: './operasi.page.html',
  styleUrls: ['./operasi.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonItem, IonLabel, IonInput, IonButton, IonButtons, IonBackButton]
})
export class OperasiPage {
  bil1: number | null = null;
  bil2: number | null = null;
  hasil: any = null;

  constructor(private alertCtrl: AlertController) {}

  async hitung() {
    if (this.bil1 === null || this.bil2 === null || this.bil1 === undefined || this.bil2 === undefined) {
      const alert = await this.alertCtrl.create({
        header: 'Error',
        message: 'Mohon isi kedua bilangan!',
        buttons: ['OK']
      });
      await alert.present();
      return;
    }

    this.hasil = {
      tambah: this.bil1 + this.bil2,
      kurang: this.bil1 - this.bil2,
      kali: this.bil1 * this.bil2,
      bagi: this.bil2 !== 0 ? (this.bil1 / this.bil2).toFixed(2) : 'Tidak bisa dibagi nol'
    };
  }
}