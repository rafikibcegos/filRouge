import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListclientsComponent  } from "./listclients/listclients.component";
import { CreateclientComponent } from "./createclient/createclient.component";
import { UpdateclientComponent } from "./updateclient/updateclient.component";
import { VirementComponent } from "./virement/virement.component";
import { RapporttransactionComponent } from "./rapporttransaction/rapporttransaction.component";
import { ListcomptesComponent } from "./listcomptes/listcomptes.component";

const routes: Routes = [

  { path: 'listClients', component: ListclientsComponent },
  {path:"nouveauClient", component : CreateclientComponent},
  {path:"modifierClient/:id", component : UpdateclientComponent},
  {path:"virement/:id", component : VirementComponent},
  {path:"rapport", component : RapporttransactionComponent},
  {path:"listComptes/:id", component : ListcomptesComponent}






];







@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
