import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CustomToolbarComponent} from "./Public/components/custom-toolbar/custom-toolbar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CustomToolbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Achete-Frontend';
}
