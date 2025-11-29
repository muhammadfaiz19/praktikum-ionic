import { Component } from '@angular/core';                                      // Mengimpor decorator Component dari Angular core
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonList, IonItem, IonLabel } from '@ionic/angular/standalone';  // Mengimpor komponen Ionic yang akan digunakan (standalone mode Ionic 7+)
import { RouterLink } from '@angular/router';                                     // Mengimpor directive RouterLink untuk navigasi antar halaman
import { CommonModule } from '@angular/common';
import { FooterComponent } from "../components/footer.component";                                    // Mengimpor CommonModule (ngIf, ngFor, dll)

@Component({                                                                 // Dekorator @Component mendefinisikan metadata komponen
  selector: 'app-home',                                                       // Selector CSS yang akan digunakan untuk memanggil komponen ini (<app-home>)
  templateUrl: 'home.page.html',                                              // File template HTML yang akan dirender
  styleUrls: ['home.page.scss'],                                              // File CSS/SCSS khusus untuk halaman ini
  standalone: true,                                                           // Menandakan komponen ini standalone (tidak perlu NgModule)
  imports: [CommonModule, RouterLink, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonList, IonItem, IonLabel, FooterComponent] // Daftar modul/komponen yang di-import langsung ke komponen ini
 // Daftar modul/komponen yang di-import langsung ke komponen ini
})
export class HomePage {}                                                       // Deklarasi kelas komponen (kosong karena hanya menampilkan menu statis)