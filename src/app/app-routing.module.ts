import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ContactsComponent } from "./pages/contacts/contacts.component";
import { BlogComponent } from "./pages/blog/blog.component";
import { ChartComponent } from "./pages/chart/chart.component";

const routes: Routes = [
  {
    path: "contacts",
    component: ContactsComponent,
  },
  {
    path: "blog",
    component: BlogComponent,
  },
  {
    path: "chart",
    component: ChartComponent,
  },
  {
    path: "",
    redirectTo: "contacts",
    pathMatch: "full",
  },

  {
    path: "**",
    component: ContactsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
