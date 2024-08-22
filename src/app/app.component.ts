import { NgFor, NgForOf, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SquareComponent } from "./square/square.component";
import { FormsModule } from '@angular/forms';
// import {HttpClientModule} from '@angular/common/http'


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf, SquareComponent, NgFor, FormsModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'weather-app';
}
