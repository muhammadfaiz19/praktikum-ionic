import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonItem, IonLabel, IonInput, IonButton, IonList, IonRadioGroup, IonRadio, IonBackButton, IonButtons } from '@ionic/angular/standalone';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-ideal',
  templateUrl: './ideal.page.html',
  styleUrls: ['./ideal.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonItem, IonLabel, IonInput, IonButton, IonList, IonRadioGroup, IonRadio, IonButtons, IonBackButton]
})
export class IdealPage {
  tinggi: number | null = null;
  jenisKelamin: 'pria' | 'wanita' = 'pria';
  beratIdeal: number | null = null;

  constructor(private alertCtrl: AlertController) {}

  async hitungIdeal() {
    if (!this.tinggi || this.tinggi <= 0) {
      const alert = await this.alertCtrl.create({
        header: 'Error',
        message: 'Masukkan tinggi badan yang valid!',
        buttons: ['OK']
      });
      await alert.present();
      return;
    }

    if (this.jenisKelamin === 'pria') {
      this.beratIdeal = (this.tinggi - 100) * 0.9;
    } else {
      this.beratIdeal = (this.tinggi - 100) * 0.85;
    }

    this.beratIdeal = Number(this.beratIdeal.toFixed(1));
  }
}