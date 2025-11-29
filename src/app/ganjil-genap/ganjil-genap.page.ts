import { Component } from '@angular/core';                                      // Import decorator Component
import { FormsModule } from '@angular/forms';                                      // Diperlukan untuk two-way binding [(ngModel)]
import { CommonModule } from '@angular/common';                                    // Untuk directive umum (*ngIf, dll)
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonItem, IonLabel, IonInput, IonButton, IonBackButton, IonButtons } from '@ionic/angular/standalone';
import { FooterComponent } from "../components/footer.component"; // Komponen Ionic yang dibutuhkan

@Component({
  selector: 'app-ganjil-genap',                                                // Selector komponen
  templateUrl: './ganjil-genap.page.html',                                     // Template HTML
  styleUrls: ['./ganjil-genap.page.scss'],                                      // File SCSS
  standalone: true,
  imports: [CommonModule, FormsModule, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonItem, IonLabel, IonInput, IonButton, IonButtons, IonBackButton, FooterComponent] // Import modul & komponen
 // Import modul & komponen
})
export class GanjilGenapPage {
  angka: number | null = null;                                                  // Property untuk menyimpan angka yang diinput user (bisa null)
  hasil: string = '';                                                           // Property untuk menampilkan hasil "Ganjil" atau "Genap"

  cek() {                                                                       // Method yang dipanggil saat tombol "Cek" ditekan
    if (this.angka === null) {                                                  // Validasi: jika belum diisi
      this.hasil = 'Masukkan angka terlebih dahulu!';
      return;
    }
    this.hasil = this.angka % 2 === 0 ? 'Genap' : 'Ganjil';                     // Logika: jika sisa bagi 2 = 0 → genap, selain itu ganjil
  }
}