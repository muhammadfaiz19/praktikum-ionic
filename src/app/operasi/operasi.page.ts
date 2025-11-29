import { Component } from '@angular/core';                                      // Import decorator Component
import { FormsModule } from '@angular/forms';                                      // Diperlukan untuk [(ngModel)]
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonItem, IonLabel, IonInput, IonButton, IonButtons, IonBackButton } from '@ionic/angular/standalone'; // Komponen Ionic
import { CommonModule } from '@angular/common';                                    // Untuk directive umum
import { AlertController } from '@ionic/angular';
import { FooterComponent } from "../components/footer.component";                                  // Untuk menampilkan popup error

@Component({
  selector: 'app-operasi',
  templateUrl: './operasi.page.html',
  styleUrls: ['./operasi.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonItem, IonLabel, IonInput, IonButton, IonButtons, IonBackButton, FooterComponent]
})
export class OperasiPage {
  bil1: number | null = null;                                                  // Menyimpan bilangan pertama (bisa null jika belum diisi)
  bil2: number | null = null;                                                  // Menyimpan bilangan kedua
  hasil: any = null;                                                           // Menyimpan objek hasil operasi (null = belum dihitung)

  constructor(private alertCtrl: AlertController) {}                           // Inject AlertController untuk popup

  async hitung() {                                                             // Method untuk melakukan semua operasi aritmatika
    // Validasi: pastikan kedua bilangan sudah diisi
    if (this.bil1 === null || this.bil2 === null || this.bil1 === undefined || this.bil2 === undefined) {
      const alert = await this.alertCtrl.create({                                // Buat alert error
        header: 'Error',
        message: 'Mohon isi kedua bilangan!',
        buttons: ['OK']
      });
      await alert.present();                                                    // Tampilkan alert
      return;                                                                   // Hentikan eksekusi jika validasi gagal
    }

    this.hasil = {                                                               // Simpan semua hasil dalam satu objek
      tambah: this.bil1 + this.bil2,                                            // Penjumlahan
      kurang: this.bil1 - this.bil2,                                            // Pengurangan
      kali: this.bil1 * this.bil2,                                              // Perkalian
      bagi: this.bil2 !== 0 ? (this.bil1 / this.bil2).toFixed(2) : 'Tidak bisa dibagi nol' // Pembagian, cek pembagi nol
    };
  }
}