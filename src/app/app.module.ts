import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//inicio Servicios
import { CargaScriptsService } from "./carga-scripts.service";
//Fin Servicios
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { HomeComponent } from './componentes/home/home.component';
import { AboutComponent } from './componentes/about/about.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { EstudiosComponent } from './componentes/estudios/estudios.component';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    SkillsComponent,
    EstudiosComponent,
    PortfolioComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule
  ],
  providers: [
    CargaScriptsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
