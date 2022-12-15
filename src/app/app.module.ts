import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateclientComponent } from './createclient/createclient.component';
import { ListclientsComponent } from './listclients/listclients.component';
import { ListcomptesComponent } from './listcomptes/listcomptes.component';
import { ModelsComponent } from './models/models.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RapporttransactionComponent } from './rapporttransaction/rapporttransaction.component';
import { UpdateclientComponent } from './updateclient/updateclient.component';
import { VirementComponent } from './virement/virement.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateclientComponent,
    ListclientsComponent,
    ListcomptesComponent,
    ModelsComponent,
    NavbarComponent,
    RapporttransactionComponent,
    UpdateclientComponent,
    VirementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
