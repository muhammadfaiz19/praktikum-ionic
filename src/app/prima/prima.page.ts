import { Component, OnInit } from '@angular/core';                              // OnInit untuk menjalankan kode saat halaman dimuat
import { CommonModule } from '@angular/common';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonBackButton, IonButtons } from '@ionic/angular/standalone';
import { FooterComponent } from "../components/footer.component";

@Component({
  selector: 'app-prima',
  templateUrl: './prima.page.html',
  styleUrls: ['./prima.page.scss'],
  standalone: true,
  imports: [CommonModule, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonButtons, IonBackButton, FooterComponent]
})
export class PrimaPage implements OnInit {
  primaList: number[] = [];                                                    // Array untuk menyimpan bilangan prima

  ngOnInit() {                                                                 // Lifecycle hook: dijalankan saat halaman pertama kali dimuat
    this.cariPrima();                                                          // Panggil fungsi untuk mencari bilangan prima
  }

  isPrima(n: number): boolean {                                                // Fungsi untuk mengecek apakah suatu angka prima
    if (n < 2) return false;                                                   // Angka kurang dari 2 bukan prima
    for (let i = 2; i <= Math.sqrt(n); i++) {                                  // Cek pembagi dari 2 sampai akar n (efisien)
      if (n % i === 0) return false;                                           // Jika bisa dibagi rata → bukan prima
    }
    return true;                                                               // Jika tidak ada pembagi → prima
  }

  cariPrima() {                                                                // Mencari semua bilangan prima dari 2 sampai 49
    for (let i = 2; i <= 49; i++) {                                            // Loop dari 2 hingga 49
      if (this.isPrima(i)) {                                                   // Jika i adalah bilangan prima
        this.primaList.push(i);                                                // Tambahkan ke array primaList
      }
    }
  }
}