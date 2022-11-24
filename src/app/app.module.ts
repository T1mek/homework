import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { RegisterComponent } from "./components/register/register.component";
import { AuthComponent } from "./components/auth/auth.component";
import { BodyComponent } from "./components/body/body.component";
import { AngularYandexMapsModule, YaConfig } from "angular8-yandex-maps";
import { ModalComponent } from "./components/modal/modal.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { ContactsComponent } from "./pages/contacts/contacts.component";
import { BlogComponent } from "./pages/blog/blog.component";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { MdbCheckboxModule } from "mdb-angular-ui-kit/checkbox";
import { ArticleComponent } from "./components/article/article.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { SubscribeComponent } from "./components/subscribe/subscribe.component";
import { OurBlogComponent } from "./components/our-blog/our-blog.component";
import { BlogsComponent } from "./components/blogs/blogs.component";
import { ColorFullDirective } from "./directives/colorfull.directive";
import { MatButtonModule } from "@angular/material/button";
import { CommonModule } from "@angular/common";
import { ChartComponent } from "./pages/chart/chart.component";
import { HttpClientModule } from "@angular/common/http";

const mapConfig: YaConfig = {
  apikey: "API_KEY",
  lang: "en_US",
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RegisterComponent,
    AuthComponent,
    BodyComponent,
    ModalComponent,
    ContactsComponent,
    BlogComponent,
    ArticleComponent,
    SidebarComponent,
    SubscribeComponent,
    OurBlogComponent,
    BlogsComponent,
    ColorFullDirective,
    ChartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatListModule,
    MdbCheckboxModule,
    AngularYandexMapsModule.forRoot(mapConfig),
    BrowserAnimationsModule,
    MatIconModule,
    FormsModule,
    MatFormFieldModule,
    CommonModule,
    HttpClientModule,

    FormsModule,
    ReactiveFormsModule,

    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
