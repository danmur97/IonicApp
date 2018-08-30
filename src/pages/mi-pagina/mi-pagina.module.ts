import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MiPaginaPage } from './mi-pagina';

@NgModule({
  declarations: [
    MiPaginaPage,
  ],
  imports: [
    IonicPageModule.forChild(MiPaginaPage),
  ],
})
export class MiPaginaPageModule {}
