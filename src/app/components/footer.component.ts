import { Component } from '@angular/core';
import { IonFooter, IonToolbar, IonText } from '@ionic/angular/standalone';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  standalone: true,
  imports: [IonFooter, IonToolbar, IonText]
})
export class FooterComponent {}