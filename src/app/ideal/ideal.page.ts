import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonItem, IonLabel, IonInput, IonButton, IonList, IonRadioGroup, IonRadio, IonBackButton, IonButtons } from '@ionic/angular/standalone';
import { AlertController } from '@ionic/angular';
import { FooterComponent } from "../components/footer.component";                                   // Untuk menampilkan alert dialog

@Component({
  selector: 'app-ideal',
  templateUrl: './ideal.page.html',
  styleUrls: ['./ideal.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonItem, IonLabel, IonInput, IonButton, IonList, IonRadioGroup, IonRadio, IonButtons, IonBackButton, FooterComponent]
})
export class IdealPage {
  tinggi: number | null = null;                                                 // Tinggi badan dalam cm
  jenisKelamin: 'pria' | 'wanita' = 'pria';                                     // Default pilih pria (type literal biar hanya dua pilihan)
  beratIdeal: number | null = null;                                             // Hasil perhitungan berat ideal

  constructor(private alertCtrl: AlertController) {}                            // Inject AlertController untuk menampilkan popup error

  async hitungIdeal() {                                                         // Method async karena akan menampilkan alert
    if (!this.tinggi || this.tinggi <= 0) {                                     // Validasi input tinggi
      const alert = await this.alertCtrl.create({                              // Membuat alert
        header: 'Error',
        message: 'Masukkan tinggi badan yang valid!',
        buttons: ['OK']
      });
      await alert.present();                                                    // Menampilkan alert
      return;
    }

    if (this.jenisKelamin === 'pria') {                                         // Rumus Broca untuk pria
      this.beratIdeal = (this.tinggi - 100) * 0.9;
    } else {                                                                    // Rumus Broca untuk wanita
      this.beratIdeal = (this.tinggi - 100) * 0.85;
    }

    this.beratIdeal = Number(this.beratIdeal.toFixed(1));                       // Membulatkan ke 1 angka desimal
  }
}