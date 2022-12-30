import { Component } from '@angular/core';
import { CargaScriptsService } from "./carga-scripts.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-frontend';
  constructor(private _CargaScripts: CargaScriptsService) {
    _CargaScripts.carga(["animaciones"]);
  }
}
